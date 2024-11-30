// Star Rating System
document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', () => {
      const stars = document.querySelectorAll('.star');
      const value = star.getAttribute('data-value');
      stars.forEach(s => {
        if (s.getAttribute('data-value') <= value) {
          s.classList.add('active');
        } else {
          s.classList.remove('active');
        }
      });
    });
  });
  const problemForm = document.getElementById('problemForm');
    const problemContainer = document.getElementById('problemContainer');
    let problemCount = 0;

    problemForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const problemText = document.getElementById('problem').value.trim();
      if (problemText) {
        problemCount += 1;

        const problemItem = document.createElement('div');
        problemItem.classList.add('problem-item');

        // Header with number and text
        const problemHeader = document.createElement('p');
        problemHeader.classList.add('problem-header');
        problemHeader.textContent = `Problem ${problemCount}: ${problemText}`;
        problemItem.appendChild(problemHeader);

        // Comment section
        const commentSection = document.createElement('div');
        commentSection.classList.add('comment-section');

        const commentInput = document.createElement('input');
        commentInput.type = 'text';
        commentInput.placeholder = 'Add a comment...';

        const commentButton = document.createElement('button');
        commentButton.textContent = 'Reply';
        commentButton.classList.add('btn');

        commentButton.addEventListener('click', () => {
          if (commentInput.value.trim()) {
            const comment = document.createElement('p');
            comment.textContent = `Reply: ${commentInput.value}`;
            commentSection.appendChild(comment);
            commentInput.value = '';
          }
        });

        commentSection.appendChild(commentInput);
        commentSection.appendChild(commentButton);
        problemItem.appendChild(commentSection);

        problemContainer.appendChild(problemItem);
        document.getElementById('problem').value = ''; // Clear input field
      } else {
        alert("Problem description cannot be empty!");
      }
    });
    document.getElementById('feedbackForm').addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent the form from submitting
    
      // Retrieve form values
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const feedback = document.getElementById('feedback').value.trim();
    
      // Email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
      // Validate fields
      if (!name) {
        alert('Please enter your name.');
        return;
      }
    
      if (!email) {
        alert('Please enter your email.');
        return;
      }
    
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
    
      if (!feedback) {
        alert('Please provide your feedback.');
        return;
      }
    
      // If all fields are valid
      alert('Thank you for your feedback! Your submission has been received.');
      // Here, you can process the form data or send it to the server
    });
    
