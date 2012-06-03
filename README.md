jQuery reselect plugin
===========

jQuery reselect plugin customize your <select> elements by adding text input to them, for
accept custom text from user.

![illustration](http://habrastorage.org/storage2/5b1/410/2be/5b14102bec8492300a97e3840db08fed.png "illustration")

Installation
------------

1. Include jQuery library to your page
2. Include jquery.reselect.min.js and jquery.reselect.css

Usage
-----

Apply plugin to select elements, which should customized

    $('.selects').reselect();

Features
---------

* Small size: 1kb and ~150 bytes with gzip
* Change native select option.

Options
---------

You can pass options to reselect call.
$('.selects').reselect({
	name: 'city',
	placeholder: 'Select city...'
});

* **name**. The name attribute of the text input, which replaced select element
* **placeholder**. Placeholder for text input

Features in new versions
---------

1. Native autocomplete without any third-party plugins. Now, you can use autocomplete by using [jQuery autocomplete plugin](http://jqueryui.com/demos/autocomplete/ "autocomplete")
2. Auto width
3. Support optiongroup
4. Multiselect
5. Navigate by key arrows
6. Coming from your ideas...
