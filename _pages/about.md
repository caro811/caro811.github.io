---
permalink: /
title: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

PhD in Computer Science with a strong background in research and teaching, particularly in algorithmic aspects of graph theory.

I have a solid foundation in various programming paradigms, with experience in C++, Haskell, Python, JavaScript, and more.

Above all, I enjoy tackling challenges. I am a problem solver, a quick learner and a team player, dedicated to continuous learning and growth.

I am currently exploring opportunities in industry to leverage my skills in innovative and impactful projects.

<!---------------------------------------------->
<h2 class="archive-subtitle">
    Education
</h2>

<ul class="archive-list">
  {% for post in site.education reversed %}
    {% include sections/education.html %}
  {% endfor %}
</ul>

<!---------------------------------------------->
<h2 class="archive-subtitle">
    Software skills
</h2>

<ul class="archive-list">
  {% for post in site.software_skills %}
    {% include sections/software_skills.html %}
  {% endfor %}
</ul>

<!---------------------------------------------->
<h2 class="archive-subtitle">
    Languages
</h2>

<ul class="archive-list">
  {% for post in site.spoken_languages %}
    {% include sections/spoken_languages.html %}
  {% endfor %}
</ul>
