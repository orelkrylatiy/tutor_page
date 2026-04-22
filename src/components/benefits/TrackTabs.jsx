'use client';

import useHashSync from '../../hooks/useHashSync';

const HASH_TO_TRACK = {
  'tutor-track': 'tutor',
  'mentor-track': 'mentor',
};

const TRACK_TO_HASH = {
  tutor: 'tutor-track',
  mentor: 'mentor-track',
};

export default function TrackTabs({ tracks }) {
  const [activeTrack, setActiveTrack] = useHashSync({ defaultValue: 'tutor', map: HASH_TO_TRACK });
  const active = tracks[activeTrack] ?? tracks.tutor;
  const ActiveIcon = active.icon;

  function handleTrackChange(trackKey) {
    setActiveTrack(trackKey);
    const hash = TRACK_TO_HASH[trackKey];

    if (hash && typeof window !== 'undefined' && window.location.hash !== `#${hash}`) {
      window.location.hash = hash;
    }
  }

  return (
    <section id="tracks">
      <h2 className="section-label">Форматы работы</h2>
      <div className="tracks-shell fade-up">
        <div className="track-tabs" role="tablist" aria-label="Форматы работы">
          {Object.values(tracks).map(track => (
            <button
              key={track.key}
              id={track.key === 'tutor' ? 'tutor-track' : 'mentor-track'}
              type="button"
              role="tab"
              aria-selected={activeTrack === track.key}
              className={`track-tab ${activeTrack === track.key ? 'active' : ''}`}
              onClick={() => handleTrackChange(track.key)}
            >
              {track.label}
            </button>
          ))}
        </div>

        <div className="track-panel" role="tabpanel">
          <div className="track-panel-main">
            <div className="track-kicker">{active.accent}</div>
            <h3 className="track-title">{active.title}</h3>
            <p className="track-subtitle">{active.subtitle}</p>
          </div>

          <div className="track-points">
            {active.bullets.map(point => (
              <div className="track-point" key={point}>
                <span className="track-point-dot" aria-hidden="true" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          <div className="track-side">
            <ActiveIcon size={28} strokeWidth={1.9} />
            <p>
              Секция сразу разделяет два сценария: школьная подготовка и наставничество по React/веб-разработке.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
