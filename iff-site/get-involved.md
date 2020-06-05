---
layout: default
title: Get Involved
permalink: /get-involved/

masthead_bg: /img/hero_getinvolved002.jpg

involved_headline: "The Ingram Family Foundation is a 501(c)(3) organization.  Our journey starts with your tax deductible contribution."

donate_section_title: "To Donate"
donate_link_title: "Donate"
donate_title_1: "Online"
donate_title_2: "Mail"
checks_payable: "Please make checks payable to:"
mail_address: "Ingram Family Foundation, Inc.
				P.O. Box 5780
				Pikesville, Maryland 21282"
---

<div class="blue_layout">
	<div class="frow wrapper">
		<div class="frow">
			<div class="col-sm-3-5 copy">
				<p>{{ page.involved_headline }}</p>
			</div>
		</div>
		<div class="section_title title_get_involved">{{ page.donate_section_title }}</div>
		<div class="frow wrapper">
			<div class="col-sm-2-5 donate_wrapper">
				<div class="donate_title">{{ page.donate_title_1 }}</div>
				<a class="cta donate" href="{{ site.donate_link }}" target="_blank">
					<div>{{ page.donate_link_title }}</div>
				</a>
			</div>
			<div class="separator"></div>
			<div class="col-sm-2-5 donate_wrapper">
				<div class="donate_title">{{ page.donate_title_2 }}</div>
				<p>{{ page.checks_payable }}</p>
				{{ page.mail_address }}
			</div>
		</div>
	</div>
</div>