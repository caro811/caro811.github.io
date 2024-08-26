---
layout: archive_plain
title: "Awards"
permalink: /awards/
author_profile: true
---

{% include base_path %}

<h2 class="archive-subtitle">Distinctions</h2>
<ul class="archive-list">
  {% for post in site.awards reversed %}
    {% if post.type == "distinction" %}
      {% include sections/awards.html %}
    {% endif %}
  {% endfor %}
</ul>

<h2 class="archive-subtitle">Mathematical and Informatics Olympiads</h2>
<ul class="archive-list">
  {% for post in site.awards reversed %}
    {% if post.type == "olympiad" %}
      {% include sections/awards.html %}
    {% endif %}
  {% endfor %}
</ul>
