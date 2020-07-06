'use strict';

window.onload = function() {
  const btnBuy = document.querySelectorAll('.card__button_buy');
  const btnCompare = document.querySelectorAll('.card__imgs_ellipse');

  btnCompare.forEach(btn => {
    const btnAddTo = btn.querySelector('.card__imgs_comparison');
    const btnCheck = btn.querySelector('.card__imgs_comparison_checked-hidden');

    btnAddTo.addEventListener('click', function(e) {
      const parent = e.target.parentElement;
      const item1 = parent
        .querySelector('.card__imgs_comparison_checked-hidden');
      const item2 = parent.querySelector('.card__imgs_comparison');

      item1.classList.toggle('card__imgs_comparison_checked-hidden');
      item1.classList.toggle('card__imgs_comparison_checked');

      item2.classList.toggle('card__imgs_comparison');
      item2.classList.toggle('card__imgs_comparison-onclick');
    });

    btnCheck.addEventListener('click', function(e) {
      const parent = e.target.parentElement;
      const item1 = parent.querySelector('.card__imgs_comparison_checked');
      const item2 = parent.querySelector('.card__imgs_comparison-onclick');

      item1.classList.toggle('card__imgs_comparison_checked-hidden');
      item1.classList.toggle('card__imgs_comparison_checked');

      item2.classList.toggle('card__imgs_comparison');
      item2.classList.toggle('card__imgs_comparison-onclick');
    });
  });

  const btnCount = document.querySelectorAll('.card__buttons_counter');

  btnCount.forEach(btn => {
    const btnMinus = btn.querySelector('.card__buttons_counter-minus');
    const btnPlus = btn.querySelector('.card__buttons_counter-plus');

    function getValue() {
      const btnValue = btn.querySelector('.card__buttons_counter-count');

      return +(btnValue.innerHTML);
    }

    function setValue(value) {
      const btnValue = btn.querySelector('.card__buttons_counter-count');

      btnValue.innerHTML = `${value}`;
    }

    btnPlus.addEventListener('click', function(e) {
      const value = getValue();

      if (value === 9) {
        return;
      }

      setValue(value + 1);
    });

    btnMinus.addEventListener('click', function(e) {
      const value = getValue();

      if (value === 1) {
        return;
      }

      setValue(value - 1);
    });
  });

  btnBuy.forEach(el => {
    el.addEventListener('click', (e) => {
      e.target.classList.toggle('card__button_buy-active');
    });
  });

  const select = function() {
    const selectHeader = document.querySelectorAll('.select__header');
    const selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(el => {
      el.addEventListener('click', selectToggle);
    });

    selectItem.forEach(el => {
      el.addEventListener('click', selectChoose);
    });

    function selectToggle() {
      this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
      const text = this.innerText;
      const selected = this.closest('.select');

      const currentText = selected.querySelector('.select__current');

      currentText.innerText = text;
      selected.classList.remove('is-active');
    }
  };

  select();
};
