<template>
  <div class="nav-container">
    <div class="navbar-content">
      <div class="logo-box">
        <img class="logo-img" src="/src/assets/images/62a74f85223343fbc2207d05.png" alt="Logo">
        <h2 class="logo">VueTodo</h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav-container {
  background-color: #aec6c5;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.logo-img {
  width: 48px;
  height: 48px;
  max-width: 100%;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0.7rem;
}

.logo-box {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.nav-box {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-link {
  color: #054d4b;
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: 600;
  transition: color 0.5s ease;
}

.nav-link:hover {
  color: #77b1af;
}

.logo {
  font-size: 1.8rem;
  font-weight: 700;
  color: #054d4b;
}
</style>
