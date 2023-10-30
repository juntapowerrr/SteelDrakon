const cards = document.querySelectorAll('.services-cards__card');
    const maxRotation = 5; // Максимальный угол поворота

    function handleMouseMove(event) {
      const card = event.currentTarget;
      const boundingBox = card.getBoundingClientRect();
      const centerX = boundingBox.left + boundingBox.width / 2;
      const centerY = boundingBox.top + boundingBox.height / 2;

      const rotateXValue = (event.clientY - centerY) / 10;
      const rotateYValue = (event.clientX - centerX) / 10;

      // Ограничиваем углы поворота
      const limitedRotateX = Math.min(Math.max(rotateXValue, -maxRotation), maxRotation);
      const limitedRotateY = Math.min(Math.max(rotateYValue, -maxRotation), maxRotation);

      card.style.transform = `perspective(1000px) rotateX(${limitedRotateX}deg) rotateY(${limitedRotateY}deg)`;
    }

    function resetTransform(event) {
      event.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    }

    cards.forEach(card => {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', resetTransform);
    });