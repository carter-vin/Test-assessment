var arr = [
  {
    'guest_type': 'crew',
    'first_name': 'Marco',
    'last_name': 'Burns',
    'guest_booking': {
      'room_no': 'A0073',
      'some_array': [7, 2, 4]
    },
  },
  {
    'guest_type': 'guest',
    'first_name': 'John',
    'last_name': 'Doe',
    'guest_booking': {
      'room_no': 'C73',
      'some_array': [1, 3, 5, 2, 4, 3]
    },
  },
  {
    'guest_type': 'guest',
    'first_name': 'Jane',
    'last_name': 'Doe',
    'guest_booking': {
      'room_no': 'C73',
      'some_array': [1, 3, 5, 2, 4, 3]
    },
  },
  {
    'guest_type': 'guest',
    'first_name': 'Albert',
    'last_name': 'Einstein',
    'guest_booking': {
      'room_no': 'B15',
      'some_array': [2, 5, 6, 3]
    },
  },
  {
    'guest_type': 'crew',
    'first_name': 'Jack',
    'last_name': 'Daniels',
    'guest_booking': {
      'room_no': 'B15',
      'some_array': [2, 5, 6, 3]
    },
  },
  {
    'guest_type': 'guest',
    'first_name': 'Alan',
    'last_name': 'Turing',
    'guest_booking': {
      'room_no': 'B15',
      'some_array': [2, 5, 6, 3]
    },
  },
];

function doFlatten(item, result = {}) {
  for (const key in item) {
    if (Object.hasOwnProperty.call(item, key)) {
      const value = item[key];
      if (Array.isArray(value)) {
        result[key] = value
      } else if (value !== null && typeof value === 'object') {
        doFlatten(value, result)
      } else {
        result[key] = value
      }
    }
  }
  return result
}

function mutateArray(a = []) {
  // 1. Update the `mutateArray` function to return `a` as a flattened array, so that each item is changed to
  const flattenedArray = a.map(i => doFlatten(i));

  return flattenedArray;
}

$(document).ready(function () {
  $('#originalArray').html(JSON.stringify(arr, null, 2));
  $('#resultsArray').html(JSON.stringify(mutateArray(arr), null, 2));
});
