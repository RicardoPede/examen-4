const tf = require('@tensorflow/tfjs');

tf.randomUniformInt([10, 10], 1, 5).print();

tf.randomUniform([10, 10], 1, 5, 'int32').print();

tf.round(tf.randomUniform([10, 10], 1, 4)).print();

// const opcion1 = tf.randomUniformInt([10, 10], 1, 5);
// const opcion2 = tf.randomUniform([10, 10], 1, 5, 'int32');
// const opcion3 = tf.round(tf.randomUniform([10, 10], 1, 4));

