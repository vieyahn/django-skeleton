import React from 'react';


class Form extends React.Component {
  static propTypes() {
    return {
      onSubmit: React.PropTypes.func.isRequired,
      submitDisabled: React.PropTypes.bool,
      submitLabel: React.PropTypes.string.isRequired,
      footerClass: React.PropTypes.string,
      extraButton: React.PropTypes.element
    }
  }

  getDefaultProps() {
    return {
      submitLabel: 'Save Changes',
      submitDisabled: false,
      footerClass: 'form-actions align-right'
    }
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        {this.props.children}
        <div className={this.props.footerClass} style={{marginTop: 25}}>
          <button className="btn btn-primary"
            disabled={this.props.submitDisabled}
            type="submit">{this.props.submitLabel}</button>
          {this.props.extraButton}
        </div>
      </form>
    );
  }
}

export default Form;
