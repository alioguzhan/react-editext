# 2.0.0 - September 30, 2018

This version brings some important and breaking changes. Please consider to upgrade v2.

And very special thanks to [Oririner](https://www.reddit.com/user/Oririner) from Reddit for [such a great and detailed review](https://www.reddit.com/r/reactjs/comments/9i1z7s/react_editext_inline_editable_text_component/e6gedgh/). This feedback helped me a lot especially to release this version.

- `inputProps` and `viewProps` for both input and content div. :tada:

  > You can customize `input` element and the `div` that shows edited value. See Examples pages for detailes usage.

- `onValidationFail` prop. :tada: :lock:

  > You don't have to stick to the default validation message and styling. You can track the `validity` and act based on its value. See the examples page.

- Add `hint` prop.

  > Useful if you want to show a simple hint message at the bottom of input element.

- Support for more input types. :white_check_mark:

  > New Types -> `date`, `datetime-local`, `time`, `month`, `url`, `week`, `tel`

- Add more examples -> [https://alioguzhan.github.io/react-editext/](https://alioguzhan.github.io/react-editext/)

- Remove `inputClassName` and `containerClassName` props :warning: :x:

  > Since we added `inputProps` and `viewProps` these are no longer needed.

- Remove `save on press Enter` feature. :warning: :x:
  > This blocks new line feature in textarea.

## 1.2.1 - September 29, 2018

- Added `type=button` to all buttons.

- Improve tests

## 1.2.0 - September 23, 2018

- Added `className` prop for custom styling to text content

- Added tests

## 1.1.0 - September 22, 2018

- Trigger save action on press Enter

- Improve default styling for Firefox and Safari

- Added this changelog

## 1.0.1 - September 22, 2018

- Add `validation` feature. Now we can pass a function to validate the content before save it. See [examples page](https://alioguzhan.github.io/react-editext/) for more details.

## 1.0.0 - September 21, 2018

- Initial Release
