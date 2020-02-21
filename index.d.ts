declare module 'react-editext' {
    import * as React from 'react';

    export type EdiTextType = "text" | "textarea" | "email" | "number" | "date" | "datetime-local" | "time" | "month" | "url" | "week" | "tel";
    export type ButtonsAlignment = "after" | "before";

    export interface EdiTextProps {
        /**
         * Props to be passed to input element.
         * Any kind of valid DOM attributes are welcome
        */
        inputProps?:React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
        /**
         * Props to be passed to div element that shows the text.
         * You can specify your own `styles` or `className`
        */
        viewProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
        /**
        * Value of the content [in view mode] and input [in edit mode]
        */
        value: string;
        /**
         * A simple hint message appears at the bottom of input element.
         * Any valid element is allowed.
         */
        hint?: React.ReactNode;
        /**
        If validation fails this message will appear
        */
        validationMessage?: any;
        /** Pass your own validation function.
        * takes one param -> `value`.
        * It must return `true` or `false`
        */
        validation?: (...args: string[]) => boolean;
        /**
         * will be called when validation fails.
         * takes one param <value> which is the current value of input
         */
        onValidationFail?: (...args: string[]) => any;
        /**
         * Input type. Possible options are:
         * `text`, `number`, `email`, `textarea`, `date`,
         * `datetime-local`, `time`, `month`, `url`, `week`, `tel`
         */
        type: EdiTextType;
        /**
         * will be called when user clicked cancel button
         * @param value the current value of input when cancelled.
         * @param inputProps inputProps that passed to the element.
        */
        onCancel?: (value: any, inputProps: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => any;
        /**
         * will be called when user clicked save button.
         * @param value the current value of input
         * @param inputProps inputProps that passed to the element.
        */
        onSave: (value: any, inputProps: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => any;
        /**
         * Custom class name for SAVE button.
         * */
        saveButtonClassName?: string;
        /**
         * Custom class name for EDIT button.
         * */
        editButtonClassName?: string;
        /**
         * Custom class name for CANCEL button. */
        cancelButtonClassName?: string;
        /**
         * Content for CANCEL button. Any valid element and node are allowed. */
        cancelButtonContent?: any;
        /**
         * Content for SAVE button. Any valid element and node are allowed. */
        saveButtonContent?: any;
        /**
         * Content for EDIT button. Any valid element and node are allowed. */
        editButtonContent?: any;
        /**
         * Set it to `true` if you don't want to see default icons
        * on action buttons.See Examples page for more details.
        */
        hideIcons?: boolean;
        /**
         * Decides whether buttons will be located _BEFORE_ or _AFTER_
         * the input element. Default is `after`.
        */
        buttonsAlign?: ButtonsAlignment;
        /**
         * Custom class name for the container in view mode.
         */
        viewContainerClassName?: string;
        /**
         * Custom class name for the container in edit mode.
         * Will be set to viewContainerClassName if you set it and omit this.
         */
        editContainerClassName?: string;
        /**
         * Custom class name for the top-level main container.
         */
        mainContainerClassName?: string;
        /**
         * Set it to `true` if you want clicking on the view to activate the editor.
         */
        editOnViewClick?: boolean;
        /**
         * Set it to `true` if you want the view state to be edit mode
         */
        editing?: boolean;
        /**
         * Will be called when the editing mode is active.
         *
         * @param value the value of the input at the time when editing started.
         * @param inputProps inputProps that passed to the element.
         */
        onEditingStart?: (value: any, inputProps: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> ) => any;
        /**
         * Set it to `true` if you want to display action buttons **only**
         * when the text hovered by the user.
         */
        showButtonsOnHover?: boolean;
         /**
         * Set it to `true` if you want to submit the form when `Enter`
         * is pressed.
         */
        submitOnEnter?: boolean;
         /**
         * Set it to `true` if you want to cancel the form when `Escape`
         * is pressed.
         */
        cancelOnEscape?: boolean;
        /**
         * Set it to `true` if you want to cancel the form when the input
         * is unfocused.
         */
        cancelOnUnfocus?: boolean;
        /**
         * Set it to `true` if you want to save the form when the input
         * is unfocused.
         */
        submitOnUnfocus?: boolean;
    }

    export default class EdiText extends React.Component<EdiTextProps, any> {
        render(): JSX.Element;
    }
}
