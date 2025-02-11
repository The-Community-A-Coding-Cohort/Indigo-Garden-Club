<script>
  let email = "";
  let password = "";

  function handleSubmit(event) {
    event.preventDefault();
    // Dummy authentication - set a flag in localStorage.
    localStorage.setItem("authenticated", "true");
    alert("Logged in! (Dummy authentication)");
    // Redirect to the dashboard.
    window.location.href = "/dashboard";
  }
</script>

<style>
  form {
    max-width: 300px;
    margin: 2rem auto;
    background: #222;
    padding: 1rem;
    border-radius: 4px;
  }
  input {
    width: 100%;
    margin-bottom: 1rem;
    padding: 0.5rem;
    border: none;
    border-radius: 4px;
  }
  button {
    width: 100%;
    padding: 0.5rem;
    background: #444;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background: #555;
  }
</style>

<form on:submit|preventDefault={handleSubmit}>
  <h2>Login</h2>
  <input type="email" placeholder="Email" bind:value={email} required />
  <input type="password" placeholder="Password" bind:value={password} required />
  <button type="submit">Login</button>
</form>