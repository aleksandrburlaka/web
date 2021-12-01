$(document).ready(function () {
  var displayBox = document.getElementById('display')
  var hasEvaluated = false

    function clickNumbers (val) {
    if (displayBox.innerHTML === '0' || (hasEvaluated === true && !isNaN(displayBox.innerHTML))) {
      displayBox.innerHTML = val
    } else {
      displayBox.innerHTML += val
    }
    hasEvaluated = false
  }

  $('#plus_minus').click(function () {
    if (eval(displayBox.innerHTML) > 0) {
      displayBox.innerHTML = '-' + displayBox.innerHTML
    } else {
      displayBox.innerHTML = displayBox.innerHTML.replace('-', '')
    }
  })

  $('#clear').click(function () {
    displayBox.innerHTML = '0'
    $('button').prop('disabled', false)
  })
  $('#one').click(function () {
    checkLength(displayBox.innerHTML)
    clickNumbers(1)
  })
  $('#two').click(function () {
    checkLength(displayBox.innerHTML)
    clickNumbers(2)
  })
  $('#three').click(function () {
    checkLength(displayBox.innerHTML)
    clickNumbers(3)
  })
  $('#four').click(function () {
    checkLength(displayBox.innerHTML)
    clickNumbers(4)
  })
  $('#five').click(function () {
    checkLength(displayBox.innerHTML)
    clickNumbers(5)
  })
  $('#six').click(function () {
    checkLength(displayBox.innerHTML)
    clickNumbers(6)
  })
  $('#seven').click(function () {
    checkLength(displayBox.innerHTML)
    clickNumbers(7)
  })
  $('#eight').click(function () {
    checkLength(displayBox.innerHTML)
    clickNumbers(8)
  })
  $('#nine').click(function () {
    checkLength(displayBox.innerHTML)
    clickNumbers(9)
  })
  $('#zero').click(function () {
    checkLength(displayBox.innerHTML)
    clickNumbers(0)
  })
  $('#decimal').click(function () {
    if (displayBox.innerHTML.indexOf('.') === -1 ||
      (displayBox.innerHTML.indexOf('.') !== -1 && displayBox.innerHTML.indexOf('+') !== -1) ||
      (displayBox.innerHTML.indexOf('.') !== -1 && displayBox.innerHTML.indexOf('-') !== -1) ||
      (displayBox.innerHTML.indexOf('.') !== -1 && displayBox.innerHTML.indexOf('×') !== -1) ||
      (displayBox.innerHTML.indexOf('.') !== -1 && displayBox.innerHTML.indexOf('÷') !== -1)) {
      clickNumbers('.')
    }
  })

  $('#add').click(function () {
    evaluate()
    checkLength(displayBox.innerHTML)
    displayBox.innerHTML += '+'
  })
  $('#subtract').click(function () {
    evaluate()
    checkLength(displayBox.innerHTML)
    displayBox.innerHTML += '-'
  })
  $('#multiply').click(function () {
    evaluate()
    checkLength(displayBox.innerHTML)
    displayBox.innerHTML += '×'
  })
  $('#divide').click(function () {
    evaluate()
    checkLength(displayBox.innerHTML)
    displayBox.innerHTML += '÷'
  })
  $('#square').click(function () {
    var num = Number(displayBox.innerHTML)
    num = num * num
    checkLength(num)
    displayBox.innerHTML = num
  })
  $('#sqrt').click(function () {
    var num = parseFloat(displayBox.innerHTML)
    num = Math.sqrt(num)
    displayBox.innerHTML = Number(num.toFixed(5))
  })
  $('#equals').click(function () {
    evaluate()
    hasEvaluated = true
  })

  function evaluate () {
    displayBox.innerHTML = displayBox.innerHTML.replace(',', '')
    displayBox.innerHTML = displayBox.innerHTML.replace('×', '*')
    displayBox.innerHTML = displayBox.innerHTML.replace('÷', '/')
    if (displayBox.innerHTML.indexOf('/0') !== -1) {
      $('button').prop('disabled', false)
      $('.clear').attr('disabled', false)
      displayBox.innerHTML = 'Undefined'
    }
    var evaluate = eval(displayBox.innerHTML)
    if (evaluate.toString().indexOf('.') !== -1) {
      evaluate = evaluate.toFixed(5)
    }
    checkLength(evaluate)
    displayBox.innerHTML = evaluate
  }

  function checkLength (num) {
      if (num.toString().length > 16) {
      num = 'Infinity'
      $('button').prop('disabled', true)
      $('.clear').attr('disabled', false)
    }
  }
})
