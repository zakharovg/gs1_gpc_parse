GS1 Global Product Classification (GPC) Parsing tool
=============
This is my first touch on javascript. I needed to get translated categories of GPC in russian, 
but unfortunately GS1 provided only english [documents](http://www.gs1.org/gsmp/kc/gpc), that contained classifications.

A few scripts to parse the GPC tree from the [GPCTools site](http://gpctools.agena3000.fr/GS1/BROWSER/Arbo.aspx)

Steps to parse:

1. Go to [GPCTools site](http://gpctools.agena3000.fr/GS1/BROWSER/Arbo.aspx)
2. Select desired options in dropdown lists and click [Expand All | Family | Class | Brick].
3. Open browser console and paste script from inject_jquery.
4. Paste script from parse_gpctools to console.
5. Clear the console.
6. Type paste_tree();
7. Copy tab separated codes and names of all displayed categories.
