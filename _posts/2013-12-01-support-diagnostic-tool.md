---
layout: post
title: I created a network troubleshooting tool
date: 2013-12-01 10:00
categories: Programming
---
From time to time we have some customers who need in-depth troubleshooting of their network.
Such as not being able to get a connection to a specific environment.

I wrote a handy tool to do the troubleshooting

The tool is available on this public GitHub; [https://github.com/vincentvandaal/support_diagnostic_tool](https://github.com/vincentvandaal/support_diagnostic_tool)

It’s quite useful if you’re using a Firewall for instance and need some troubleshooting done from the customer end.
The tool currently performs a Telnet, Ping, Traceroute and also logs the IP used by the customer. It logs the results to a diagnostics.log which the customer has to sent back to you.

Most options can be configured with the supplied “config.ini”

Since mostly Windows users don’t really understand how to manually do a Telnet / Ping or Traceroute [I decided to compile it into an executable](https://github.com/vincentvandaal/support_diagnostic_tool/releases)

Be sure to leave any feedback for improvements!
