import React from 'react';
import '../assets/css/Timeline.css'
const Timeline = () => {
  return (
    <div className='ros'>
    <div className="timeline-page">
      <div className="title22">
        Process Timeline
      </div>
      <div className="timeline">
        <div className="timeline-box">
          <div className="timeline-box-icon">
          🔐
          </div>
          <div className="timeline-box-stepstatus checked">
            <div className="check-circle-wrapper first">
              <div className="check-circle">
                ✓
              </div>
            </div>
            <div className="step-connection"></div>
          </div>
          <div className="timeline-box-stepname">
            Login In
          </div>
        </div>
        <div className="timeline-box">
          <div className="timeline-box-icon">
          📝
          </div>
          <div className="timeline-box-stepstatus checked">
            <div className="step-connection"></div>
            <div className="check-circle-wrapper">
              <div className="check-circle">
                ✓
              </div>
            </div>
            <div className="step-connection"></div>
          </div>
          <div className="timeline-box-stepname">
            Book
          </div>
        </div>
        <div className="timeline-box checked">
          <div className="timeline-box-icon">
          💳
          </div>
          <div className="timeline-box-stepstatus checked">
            <div className="step-connection gradient-left"></div>
            <div className="check-circle-wrapper">
              <div className="check-circle">
                ✓
              </div>
            </div>
            <div className="step-connection"></div>
          </div>
          <div className="timeline-box-stepname">
            Payment
          </div>
        </div>
        <div className="timeline-box checked">
          <div className="timeline-box-icon">
            😋
          </div>
          <div className="timeline-box-stepstatus checked">
            <div className="step-connection"></div>
            <div className="check-circle-wrapper last">
              <div className="check-circle">
                ✓
              </div>
            </div>
          </div>
          <div className="timeline-box-stepname">
            Enjoy
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Timeline;
