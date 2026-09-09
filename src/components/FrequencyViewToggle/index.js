import React, {useEffect, useState} from 'react';

export default function FrequencyViewToggle() {
  const [view, setView] = useState('operator');

  useEffect(() => {
    document.documentElement.dataset.frequencyView = view;

    return () => {
      delete document.documentElement.dataset.frequencyView;
    };
  }, [view]);

  return (
    <div className="frequency-view-control">
      <div className="frequency-view-control__text">
        <strong>Frequency Display</strong>
        <span>
          Choose the simplified operator view or show complete repeater
          input/output information.
        </span>
      </div>

      <div
        className="frequency-view-toggle"
        role="group"
        aria-label="Frequency display view"
      >
        <button
          type="button"
          className={
            view === 'operator'
              ? 'frequency-view-toggle__button active'
              : 'frequency-view-toggle__button'
          }
          aria-pressed={view === 'operator'}
          onClick={() => setView('operator')}
        >
          Operator View
        </button>

        <button
          type="button"
          className={
            view === 'technical'
              ? 'frequency-view-toggle__button active'
              : 'frequency-view-toggle__button'
          }
          aria-pressed={view === 'technical'}
          onClick={() => setView('technical')}
        >
          Technical View
        </button>
      </div>
    </div>
  );
}