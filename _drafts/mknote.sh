#/bin/bash

NOTE_TITLE=`date --rfc-3339=date`-$*.md
gvim ${NOTE_TITLE// /-}
