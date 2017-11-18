import alt from '../../../alt';

class ResumeActions {
  constructor() {
    this.generateActions(
      'findDefaultsSuccess',
      'findDefaultsFail'
    );
  }

  findDefaults(){
    $.ajax( {url: '/defaults' })
    .done((data) => {
      this.actions.findDefaultsSuccess(data)
    })
    .fail((jqXhr) => {
      this.actions.getDefaultsFail(jqXhr)
    })
  }
}

export default alt.createActions(ResumeActions);
