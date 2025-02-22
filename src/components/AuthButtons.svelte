<script>
    function goToBrowse() {
      window.location.href = '/browse';
    }
  </script>
  
  <style>
    .auth-buttons {
      margin-top: 24px;
      display: flex;
      gap: 16px;
    }
    button {
      padding: 10px 20px;
      background: #0070f3;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
      transition: background 0.3s ease;
    }
    button:hover {
      background: #005bb5;
    }
  </style>
  
  <div class="auth-buttons">
    <button on:click={goToBrowse}>Log In</button>
    <button on:click={goToBrowse}>Sign Up</button>
  </div>