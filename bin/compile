#!/bin/bash

# Folder where everything will be compiled to
DIST="./dist"

# Re-create the 'dist' directory
rm -rf $DIST
mkdir $DIST

# Determine the theme list dynamically
cd "./private/www/netosuite/Templates"

MAINTHEME="$(ls -1)"
cd "${MAINTHEME}"
THEMES="$(ls -1 *-netothemeinfo.txt | sed s/-netothemeinfo.txt//)"

# Back to root
cd "../../../../../"

echo "Compiling '${MAINTHEME}' themes"

for theme in $THEMES; do
	echo "Building '${theme}' theme"

	# Create theme folder
	mkdir "${DIST}/${theme}"

	# Copy Templates
	cp -r "./private/www/netosuite/templates/${MAINTHEME}/" "${DIST}/${theme}"

	# Copy Assets
	cp -r "./httpdocs/assets/themes/${MAINTHEME}" "${DIST}/${theme}/_assets/"

	# Rename theme stylesheet to style.css
	mv "${DIST}/${theme}/_assets/css/${theme}-style.css" "${DIST}/${theme}/_assets/css/style.css"

	# Rename theme info file to netothemeinfo.txt
	mv "${DIST}/${theme}/${theme}-netothemeinfo.txt" "${DIST}/${theme}/netothemeinfo.txt"
done;

cd ./dist
# Archive each folder
for themeFolder in ./*; do
	zip -rq "${themeFolder%/}.zip" "$themeFolder"
	rm -rf "$themeFolder"
done;
cd ..

echo "Swag!"
