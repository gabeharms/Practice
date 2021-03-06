import numpy as np
from network.forward_propagation_result import ForwardPropagationResult

class ForwardPropagator:

    def __init__(self, layers):
        self.layers = layers

    def execute(self, parameters, training_input):
        result = ForwardPropagationResult()
        result.set_A(0, training_input)

        for layer_index in range(1, len(self.layers)):
            weights = parameters.get_weights(layer_index)
            biases = parameters.get_biases(layer_index)
            activation = self.__sigmoid if layer_index == 2 else self.__tanh

            result.set_Z(layer_index, self.__z(result.get_A(layer_index - 1), weights, biases))
            result.set_A(layer_index, activation(result.get_Z(layer_index)))

        return result

    def __z(self, input, weights, biases):
        return np.dot(weights, input) + biases

    def __tanh(self, z):
        return np.tanh(z)

    def __sigmoid(self, z):
        return 1 / (1 + np.exp(-z))


