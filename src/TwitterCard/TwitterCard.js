export default function TwitterCard({ name, username }) {

    const formatImageUrl = (username) => {
      return `https://unavatar.io/twitter/${username}`;
    };
  
    return (
      <article className="md-twitter-follow-card">
        <header className="tw-avatar">
          <img
            alt="El avatar de midudev"
            src={formatImageUrl(username)}
          />
          <div>
            <strong>{name}</strong>
            <span>{username}</span>
          </div>
        </header>
        <aside>
          <button>Seguir</button>
        </aside>
      </article>
    );
  }