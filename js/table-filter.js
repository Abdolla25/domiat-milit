$(document).ready(function () {
    $('.btn-filter').on('click', function () {
      var $target = $(this).data('target');
      if ($target != 'all') {
        $('.table-removable').css('display', 'none');
        $('.table-removable[data-status="' + $target + '"]').fadeIn('slow');
      } else {
        $('.table-removable').css('display', 'none').fadeIn('slow');
      }
    });
 });