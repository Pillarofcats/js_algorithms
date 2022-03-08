function rotate_array(array, num_rotate) {
  array.unshift(...array.splice(-(num_rotate % array.length)));
}

module.exports = { rotate_array };