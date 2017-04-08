<template>
  <div class="timeline">
    <ul>
      <li>
        <div>
          <time>March 2016</time>
          <p>Moved to London, joined Red Badger Consulting</p>
        </div>
      </li>
      <li>
        <div>
          <time>October 2015</time>
          <p>Left ThoughtWorks</p>
        </div>
      </li>
      <li>
        <div>
          <time>August 2015</time>
          <p>Moved to Oakland, CA</p>
        </div>
      </li>
      <li>
        <div>
          <time>June 2014</time>
          <p>Joined ThoughtWorks SF, attended ThoughtWorks University in Pune, India.</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'timeline',
};
</script>

<style scoped>

  .timeline {
    font-size: 16px;
    line-height: 20px;
    margin-top: 60px;
  }

  .timeline time {
    font-weight: bold;
  }

  .timeline p {
    margin: 0;
  }

  .timeline ul li {
    list-style-type: none;
    position: relative;
    width: 3px;
    padding-bottom: 50px;
    background: var(--wild-blue-yonder);
  }

  .timeline ul li::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: inherit;
  }

  .timeline ul li div {
    position: relative;
    top: 0;
    width: 400px;
    padding: 0;
    /*border: var(--lapis-lazuli) 1px solid;*/
  }

  .timeline ul li div {
    left: 45px;
  }

  .timeline ul li div::before {
    left: -15px;
    border-width: 8px 16px 8px 0;
    border-color: transparent var(--lapis-lazuli) transparent transparent;
  }
</style>
