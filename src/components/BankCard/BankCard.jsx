import { useState } from "react";
import "./BankCard.css";

export const BankCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleCard = () => {
    setIsFlipped((prev) => !prev);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleCard();
    }
  };

  return (
    <div className="card-scene">
      <article
        className={`card ${isFlipped ? "is-flipped" : ""}`}
        role="button"
        tabIndex="0"
        onClick={toggleCard}
        onKeyDown={handleKeyDown}
      >
        {/* front side*/}
        <div className="card__side card__front">
          <div className="card__shine"></div>
          <header className="card__top">
            <div className="card__brand">$10 000.00</div>
            <img src="/mc.png" alt="MasterCard logo" className="card__logo" />
          </header>
          <div className="card__number">**** **** **** 1234</div>
          <section className="card__meta">
            <div className="card__holder">User User</div>
            <div className="card__expiry">08/29</div>
          </section>
        </div>

        {/* back side*/}
        <div className="card__side card__back">
          <div className="card__magstripe"></div>
          <div className="card__signature">
            <span className="card__cvv">123</span>
          </div>
          <div className="card__info">
            You Bank • Public Joint Stock Company
          </div>
        </div>
      </article>
    </div>
  );
};
