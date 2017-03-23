/*
  // Dashboard: Teacher
--------------------------------*/

$(document).ready(function () {
            var $selected = $('.selected');
            var $start = $('.start');
            var $toggleMode = $('.toggleMode');

            var $some_datepicker = $('.some_datepicker');
            $some_datepicker.datepicker();
            var datepicker = jQueryDatepicker.data($some_datepicker);

            var date = new Date();

            $some_datepicker.on(jQueryDatepicker.event('date_selected'), function (event, date) {
                if (date.mode == 'date') {
                    console.log('date selected:', date);
                } else if (date.mode == 'start_date') {
                    console.log('start date selected:', date);
                }

                if (datepicker.isStartDateSelected()) {
                    $start.show().html('<b>start date:</b> '+date.start_date.date.toString());
                }

                $selected.show().html('<b>date:</b> '+date.date.toString());
            });

            // If you need a date range
            datepicker.setStartDate({
                year: 2017,
                month: date.getMonth()+1,
                day: 5
            });

            datepicker.setDate({
                year: 2017,
                // jquery.datepicker accepts first month as 1
                // (built-in Date() class accepts first month as 0)
                month: date.getMonth()+1,
                day: 21
            });

            $toggleMode.on('click', function (event) {
                datepicker.toggleMode();

                if (datepicker.getMode() == 'date') {
                    $toggleMode.html('toggle start date selection mode');
                } else {
                    $toggleMode.html('toggle date selection mode');
                }
            });
        });
