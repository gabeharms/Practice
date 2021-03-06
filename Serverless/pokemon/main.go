package main

import (
  "log"
  "github.com/aws/aws-lambda-go/events"
  "github.com/aws/aws-lambda-go/lambda"
  "github.com/awslabs/aws-lambda-go-api-proxy/gin"
  "github.com/gin-gonic/gin"
  "pokemon/resources/add"
  "pokemon/resources/pokemon"
  "pokemon/resources/user"
  "github.com/aws/aws-sdk-go/aws/session"
  "github.com/aws/aws-sdk-go/aws"
  "github.com/guregu/dynamo"
)

var ginLambda *ginadapter.GinLambda

func Handler(req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
  if ginLambda == nil {
    log.Printf("Cold start")
    r := gin.Default()

    db := dynamo.New(session.New(), &aws.Config{Region: aws.String("us-east-1")})

    r.Use(func(c *gin.Context) {
      if c.Keys == nil {
        c.Keys = make(map[string]interface{})
      }

      c.Keys["db"] = db
      c.Next()
    })

    authMiddleware, _ := GenerateAuthMiddleware()


    r.POST("/login", authMiddleware.LoginHandler)
    r.POST("/user", user.Create)

    r.POST("/add", add.Create)

    authGroup := r.Group("auth")
    authGroup.Use(authMiddleware.MiddlewareFunc())
    authGroup.GET("/pokemon", pokemon.Index)
    authGroup.GET("/pokemon/:id", pokemon.Show)
    authGroup.POST("/pokemon", pokemon.Create)

    ginLambda = ginadapter.New(r)
  }

  return ginLambda.Proxy(req)
}

func main() {
  lambda.Start(Handler)
}
