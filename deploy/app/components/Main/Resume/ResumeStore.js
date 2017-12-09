import alt from '../../../alt';
import ResumeActions from './ResumeActions';

class ResumeStore {
  constructor() {
    this.bindActions(ResumeActions);
    this.resumeHold={};
    this.resumeInfo={}
    this.Education=[];
    this.Experience=[];
    this.TechnicalSkills=[];

  }
  onFindDefaultsSuccess(data){
    this.resumeHold = data[0];
    this.resumeInfo = this.resumeHold.Resume;
    this.Education = this.resumeInfo.Education;
    this.Experience = this.resumeInfo.Experience;
    this.TechnicalSkills = this.resumeInfo.TechnicalSkills;
  }

  onGetDefaultsFail(jqXhr) {
    toastr.error(jqXhr.responseJSON.message);
  }

}

export default alt.createStore(ResumeStore);
