---
layout: default
title: What We Do
permalink: /what-we-do/

masthead_bg: /img/hero_whatwedo.jpg

span_desc_1: "We support"
desc_1: " activities that have a direct impact on our community; activities that include a vision for a prosperous and equitable tomorrow."
span_desc_2: "We sponsor"
desc_2: " forums, provide information and advocacy opportunities on issues that impact our community."
desc_3: "The issues are many: education, incarceration, health care, employment, etc."

questions_headline: "Our movement on issues promotes answers to three primary questions:"
question_1: "What is the level of involvement by those impacted by the issue?"
question_2: "What is the change we would like to advocate to our public officials and other decision makers?"
question_3: "How do we get other organizations involved?"
---

<div class="frow wrapper">
	<!-- <div class="section_title">{{ page.title }}</div> -->

	<div class="separator_noline">&nbsp;</div>

	<div class="icon"><img src="{{ site.tree_icon }}" /></div>

	<div class="frow">

		<div class="col-sm-3-5 copy">
			<p><span class="blue">{{ page.span_desc_1 }}</span>{{ page.desc_1 }}</p>

			<p><span class="blue">{{ page.span_desc_2 }}</span>{{ page.desc_2 }}</p>

			<p>{{ page.desc_3 }}</p>
		</div>
	</div>

	<div class="separator_noline">&nbsp;</div>

	<div class="icon"><img src="{{ site.tree_icon }}" /></div>

	<div class="separator_noline">&nbsp;</div>	

	<div class="frow centered">
		<div class="col-sm-1-2">
			<div class="group_header">{{ page.questions_headline }}</div>
		</div>
		<div class="col-sm-1-2 group_copy_wrapper">
			<div class="group">
				<span class="group_number">1</span>
				{{ page.question_1 }}
			</div>
			<div class="group">
				<span class="group_number">2</span>
				{{ page.question_2 }}
			</div>
			<div class="group">
				<span class="group_number">3</span>
				{{ page.question_3 }}
			</div>
		</div>
	</div>
</div>