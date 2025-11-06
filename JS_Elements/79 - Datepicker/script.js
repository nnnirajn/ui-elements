const myElement = document.getElementById("example");
const datepicker = new FDatepicker(myElement, {
  // options here
  range: true,
});

//  https://www.cssscript.com/f-datepicker/

// format: Sets the date display format in the input field. (Default: 'm/d/Y')
// altFormat: Defines the format for the altField, typically a machine-readable format like 'Y-m-d'.
// altField: Specifies the ID of an alternative (often hidden) input to store the date in the altFormat.
// startView: Determines the initial view when the picker opens. Options are 'days', 'months', or 'years'. (Default: 'days')
// minDate: The earliest date a user can select. Can be a Date object or a string like '2025-01-01'.
// maxDate: The latest date a user can select.
// disabledDates: An array of date strings (e.g., ['2025-12-25']) to make specific dates unselectable.
// disabledDays: An array of days (dayOfWeek) to make specific dates unselectable.
// range: Set to true to enable date range selection. (Default: false)
// multiple: Set to true to allow selecting multiple, non-consecutive dates. (Default: false)
// multipleSeparator: The character used to separate dates in the input field when multiple is true. (Default: ',')
// altFieldMultipleDatesSeparator: The separator for multiple dates in the alternative field. (Default: ',')
// multipleDisplaySelector: A CSS selector for an element where information about multiple selected dates will be displayed.
// timepicker: Set to true to enable the time selection interface. (Default: false)
// ampm: Set to true for a 12-hour clock with an AM/PM toggle; false for a 24-hour clock. (Default: true)
// timepickerDefaultNow: If true, the time picker defaults to the current time. (Default: true)
// hoursStep: The increment value for the hours input. (Default: 1)
// minutesStep: The increment value for the minutes input (e.g., 15 for 15-minute intervals). (Default: 1)
// minHours: The earliest hour that can be selected.
// maxHours: The latest hour that can be selected.
// minMinutes: The earliest minute that can be selected.
// maxMinutes: The latest minute that can be selected.
// autoClose: If true, the datepicker closes automatically after a date is selected. (Default: true)
// firstDayOfWeek: Sets the starting day of the week, where 0 is Sunday and 1 is Monday. (Default: 0)
// todayButton: Set to true to display a button that jumps to today’s date. (Default: true)
// clearButton: Set to true to show a button that clears the selected date. (Default: true)
// closeButton: Set to true to display a button that closes the datepicker. (Default: true)