// Select color input
var color;
// Select size input
var height, width;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event) {
  height = $(inputHeight).val();
  width = $(inputWidth).val();
  makeGrid(height, width);
  event.preventDefault();
})

//makeGrid function
function makeGrid(n, m) {
  //only build grid if user inputs a width <= 75
  //This is a personal choice because if it got much wider, the cell width was changing to keep it in vw in chrome.
  if(width <= 75) {
    //clear grid
    $('#pixelCanvas').children().remove();
    //build grid rows (height)
    for(var x = 1; x <= n; ++x) {
      $('#pixelCanvas').append('<tr class=row' + x +'></tr>');
      //build <td>'s based on width
      for (var y = 1; y <= m; ++y) {
        $('.row' + x).append('<td></td>');
      }
    }
    //display alert if user submits a width > 75
  } else {
    alert("The maximum number of pixels wide you can pick is 75.");
  }

  //change background color of <td>
  $('td').click(function colorSelect() {
    color = $('#colorPicker').val();
    $(this).css('background-color', color);
  })
}
