export function classnames(...args: any[]) {
  /**
   * Our simple classnames replica.
   * This is enough for me.
   */
  return Array(...args)
    .filter((a) => a)
    .join(' ');
}

export const dataAttributes = {
  /**
   * This is for the end user. You can use below attributes if you want to
   * style this component with `styled-components` or something like that.
   * Example notation:
   * <div class="EdiText_Buttons__container_34fgAsdf" editext="button-container">
   * Example usage with styled-components:

    const StyledEdiText = styled(EdiText)`
      button[editext="edit-button"] {
        color: #000;
      }
      button[editext="save-button"] {
        background:#587C0C;
        color: #fff;
      }
      input, textarea {
        background: #1D2225;
        color: #F4C361;
        font-weight: bold;
      }
    `
   */
  mainContainer: 'main-container',
  viewContainer: 'view-container',
  buttonContainer: 'button-container',
  editContainer: 'edit-container',
  editButton: 'edit-button',
  saveButton: 'save-button',
  cancelButton: 'cancel-button',
  input: 'input',
  hint: 'hint',
};

export const cancelOnConflictMessage =
  'EdiText: Both `cancelOnUnfocus` and `submitOnUnfocus` are set to true. ' +
  '`submitOnUnfocus` is ignored in this case. Please remove one of these.';
