<template>
  <div class="timeline">
    <ul>
      <li>
        <div>
          <time>May 2017 - present</time>
          <p>Joined <a href="https://labs.uswitch.com/">uSwitch</a></p>
        </div>
      </li>
      <li class="minor">
        <div>
          <time>Jan 2017 – May 2017</time>
          <p>Improved the Red Badger website as part of the internal projects team</p>
        </div>
      </li>
      <li class="minor">
        <div>
          <time>Jun 2016 – Jan 2017</time>
          <p>Worked for a large <a href="https://red-badger.com/our-work/case-study/retailer">retail client</a></p>
        </div>
      </li>
      <li class="minor">
        <div>
          <time>Apr – Jun 2016</time>
          <p>Implemented the redesign of <a href="https://red-badger.com/our-work/case-study/camden-market/">camdenmarket.com</a></p>
        </div>
      </li>
      <li>
        <div>
          <time>Mar 2016</time>
          <p>Moved to London, joined <a href="https://red-badger.com/">Red Badger Consulting</a></p>
        </div>
      </li>
      <li class="minor">
        <div>
          <time>Sep 2014 – Oct 2015</time>
          <p>Worked at Gap Inc. on a variety of in-store mobile applications</p>
        </div>
      </li>
      <li>
        <div>
          <time>Jun 2014</time>
          <p>Joined <a href="https://www.thoughtworks.com/">ThoughtWorks</a> San Francisco</p>
        </div>
      </li>
      <li>
        <div>
          <time>May 2014</time>
          <p>
            Graduated from <a href="https://www.macalester.edu/">Macalester College</a> with double majors in Computer Science and Physics
            with Astronomy Emphasis
          </p>
        </div>
      </li>
      <li class="minor">
        <div>
          <time>Summer '13</time>
          <p>
            Worked at Caltech on fixing image persistence in HgCdTe devices (telescope cameras)
          </p>
        </div>
      </li>
      <li class="minor">
        <div>
          <time>Summer '12</time>
          <p>
            Wrote FITGALAXY, a software package for measuring the stellar brightness of galaxies
            imaged by the Spitzer Space Telescope
          </p>
        </div>
      </li>
      <li class="minor">
        <div>
          <time>Summer '11</time>
          <p>
            Helped developed Macademia, a website for academics to find research collaborators
            in different disciplines, and Poliwiki, a site for political fact-checking and debate
          </p>
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
    max-width: 60%;
  }

  .timeline a {
    color: var(--lapis-lazuli);
    font-weight: bold;
    text-decoration: none;
  }

  .timeline ul {
    padding-left: 20px;
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
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: inherit;
  }

  .timeline ul li.minor::after {
    width: 12px;
    height: 12px;
  }

  .timeline ul li div {
    position: relative;
    top: 0;
    min-width: 350px;
    padding: 0;
  }

  .timeline ul li div {
    left: 45px;
  }

  .timeline ul li div::before {
    left: -15px;
    border-width: 8px 16px 8px 0;
    border-color: transparent var(--lapis-lazuli) transparent transparent;
  }

  @media (min-width: 768px) {
    .timeline p {
      margin: 0;
      max-width: 100%;
    }

    .timeline ul {
      padding-left: 40px;
    }
  }
</style>
