---
layout: archive_ol_reversed
title: "Publications"
permalink: /publications/
author_profile: true
---

{% include base_path %}

{% for post in site.publications reversed %}
  {% include sections/publications.html %}
{% endfor %}
