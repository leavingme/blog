---
layout: post
title: 将默认的OpenJDK改为SUN JAVA
date: 2010-02-27 13:58:00
---
<span style="font-family: 宋体, arial, sans-serif; font-size: 14px; line-height: 24px;">将默认的OpenJDK改为SUN JAVA （SUN JAVA的支持还是好些，如一些网页的JAVA应用及JAVA应用程序）
&nbsp;&nbsp; 安装SUN JAVA后，UBUNTU 9.10使用的还是OpenJDK，所以如果要使系统使用SUN JAVA还要进行相关的设置：
&nbsp;&nbsp; 1、update-alternatives --config java，修改系统默认的JAVA，是使用OpenJDK还是SUN JAVA等
&nbsp;&nbsp; 2、修改/usr/lib/jvm下default-java，我是把default-java指而了java-6-sun-1.6.0.15，原来的default-java改名为default-java.openjdk以备以后需要时改再回来
&nbsp;&nbsp; 3、设置系统环境变量 ~/.profile中最后加上：
# export _JAVA_OPTIONS='-Dawt.useSystemAAFontSettings=on' 原来OpenJDK使用的这句一定要注释掉
export JAVA_HOME=/usr/lib/jvm/java-6-sun-1.6.0.15
export PATH=$JAVA_HOME/bin:$PATH
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar

重启就OK了！

</span>