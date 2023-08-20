import React, { useState } from 'react';
import './NewAssessment.css';

import { ReactComponent as Add } from "../../assets/icons/add.svg";
import Modal from '../Modal/Modal';
import CreateAssessment from '../CreateAssessmentForm/CreateAssessment';


const NewAssessment = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className='new-assessment-wrapper'>
      <div className='new-assessment' onClick={() => setModalOpen(!modalOpen)}>
        <div className='new-assessment-icontext'>
          <div className='new-assessment-icon'><Add /></div>
          <div className='new-assessment-text'>New Assessment</div>
        </div>

        <p className='new-assessment-content'>From here you can add questions of multiple types like<br /> MCQs, subjective (text or paragraph)!</p>
    </div>

    <Modal heading={'Create New Assessment'} continueButtonText={'Save'} open={modalOpen} onClose={() => setModalOpen(!modalOpen)}>
      <CreateAssessment />
    </Modal>
    </div>
  )
}

export default NewAssessment