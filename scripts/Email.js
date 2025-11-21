 emailjs.init('q2r61kPxtrUxz3DYd'); // Replace with your EmailJS user ID

  document.getElementById('clickBtn').addEventListener('click', () => {
    s++;
    document.getElementById('c').textContent = `Lượt click ${s}`;

    // Send email
    emailjs.send('service_2eb94ks', 'template_g0u9f8d', {
      clickCount: s
    })
    .then(() => console.log('Email sent!'))
    .catch(err => console.error('Email error:', err));
  });