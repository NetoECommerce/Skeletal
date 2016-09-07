# Testing Skeletal
Many features of Neto's front end are controlled by Javascript files that are not included in themes. For this reason, it can be risky making Javascript changes to Sekeletal, or any theme, as you could break something that you cannot fix. This is especially the case when updating dependencies like Bootstrap or JQuery.

In this document is a list of all functions beyond a front-end developers control, and how to test them.

## Address Book
Neto features an address book feature which allows users who are logged in to add, edit and remove postage addresses to their account. This can be done both from the checkout and from the accounts page.

### Actions to test:
- Adding an entry to the address book (accounts page and checkout)
- Removing an entry from the address book
- Selecting an entry in the address book on the checkout

## Add To Cart
There are various places throughout the system where you can add products to cart, in different ways.

*Note: In each case it is important to test the pop-up that always follows the Add to Cart action.*

- Standard Add to Cart (thumbnails & product page)
- Adding a child item to cart (Table view on products with children)
- Multi-item Add
- Add a kit to cart
- Add a kit with variations to cart (ensure the variations are refreshing correctly)
- Remove an item from cart (cart page and cart drop down)

## Filters
In the sidebar of most themes there are filters. These are influenced by Javascript and must be tested.

- Category filter
- Variation filter
- Price slider

## Search
Neto's search feature is powered by AJAX through Neto.js

- Standard search
- Search with AJAX dropdown

## AJAX templates
On product and cart pages there are AJAX templates which can refresh based on the users input.

- Loading & refreshing AJAX templates on products with variations
- Various AJAX templates on cart & checkout pages

## Compatibility Categories
Compatibility categories can have a dropdown interface, where you select a top-level category and another will load underneath.

- Loading of additional dropdowns
- Eventual redirect to a results page

## NView for Mobile Users
Some users do not have responsive websites and instead have mobile themes. It's important to make sure the automatic redirect for mobile devices to the `nview` **mobile** is working correctly.

- Auto setting the nview for mobile users

## Shipping Calculator
The shipping calculator is also powered by `neto.js`.
- Calculate shipping
- Recalculate shipping after it has already been calculated

## Back-in-stock Notifications
If a product is out of stock Neto lets users automatically be notified when it is back in stock.
- Add a Back-in-stock notification from thumbnails and product pages

## Stockist Finder
Neto has a feature that lets users search through a database of stockists and see them on a map.

- Search for a stockist and get a successful result

## Wishlist
Neto let's users add products to a wishlist so they can purchase them at a later date.
- Add product to a wish list
- Remove product from a wish list


----

# Function

The following functions are all within jquery.neto.js:

## ADDRESS BOOK

Neto features an address book feature which allows users who are logged in to add, edit and remove postage addresses to their account. This can be done both from the checkout and from the accounts page.

**Actions to test:**

- Adding an entry to the address book (accounts page and checkout)
- Removing an entry from the address book
- Selecting an entry in the address book on the checkout

### $.add_addressbook_entry()

Used of the 'Edit Your Address Book' page in the Account Summary page, it requires the following input fields to be filled out to add an address to the addressbook database:

This is for the ajax to call the correct api - /ajax/addressbook:

- var addrid = $('#addr_id').val(); 

The following are user inputs on from the page:

- var shiptitle = $('#ship_title').val();
- var firstname = $('#ship_first_name').val();
- var lastname = $('#ship_last_name').val();
- var company = $('#ship_company').val();
- var street1 = $('#ship_street1').val();
- var street2 = $('#ship_street2').val();
- var zip = $('#ship_zip').val();
- var city = $('#ship_city').val();
- var state = $('#ship_state').val();
- var country = $('#ship_country').val();
- var phone = $('#ship_phone').val();

### $.del_addressbook_entry()
### $.addressbook_select(param)

---

## AJAX ADD TO CART 

There are various places throughout the system where you can add products to cart, in different ways.

*Note: In each case it is important to test the pop-up that always follows the Add to Cart action.*

- Standard Add to Cart (thumbnails & product page)
- Adding a child item to cart (Table view on products with children)
- Multi-item Add
- Add a kit to cart
- Add a kit with variations to cart (ensure the variations are refreshing correctly)
- Remove an item from cart (cart page and cart drop down)

### $.addToCartDefaults(nofancybox)
### $.addToCartInit(param)
### $.getAddToCartParam()
### $.addChildCartItem()
### $.addCartItem(skuo, qtyo, fns)
### $.addMultipleCartItems(id)
### $.removeCartItem(ind, fns)
### $.buildCartItem(data)

---

## AJAX SEARCH 

Neto's search feature is powered by AJAX through Neto.js

- Standard search
- Search with AJAX dropdown

### $.initSearchField(opts)

---

## LOAD TEMPLATE 

On product and cart pages there are AJAX templates which can refresh based on the users input.

- Loading & refreshing AJAX templates on products with variations
- Various AJAX templates on cart & checkout pages

### $.load_ajax_template(id, input, fns)

---

## COMPATIBILITY LIST 

Compatibility categories can have a dropdown interface, where you select a top-level category and another will load underneath.

- Loading of additional dropdowns
- Eventual redirect to a results page

### $.compatListInit(param)
### $.getCompatListParam()
### $.setCompatMatch(l, s)
### $.buildCompatList(s, u)

---

## ENDLESS SCROLL FUNCTIONS 

### $.endlessScroll_Init(param)
### $.endlessScroll_loadPage(pgnum)
### $.endlessScroll_updatePaging()

---

## UTIL FUNCTIONS 

### $.isMobileView()

Will return a true/false based on `var NETOMobileView`.

On init `NETOMobileView` is set to false.

### $.isFacebookView()

Will return a true/false based on `var NETOFacebookView`.

On init `NETOFacebookView` is set to false.

### $.isFacebookPurpose()

Will return a true/false based on `var NETOFacebookPurpose`.

On init `NETOFacebookPurpose` is set to false.

### $.addFacebookNView()

Finds all the `a` tags on the page and gives them an nview from the variable `NETOFacebookViewName`

On init `NETOFacebookViewName` is set to a string 'facebook'.

It also gives all each form a hidde input with the attribute name `nview` a `value` of `NETOFacebookViewName`.

### $.addFacebookNPurpose()

Calls for the `$.addNPurpose(npur` function then sets `NETOFacebookPurpose` to true.

### $.addNPurpose(npur)

The same as the `$.addFacebookNView()` function, but instead of using the varible `NETOFacebookViewName` for the nview, it uses the param 'npur' the user places in.

### $.isJQVersion(cmp,vertxt)

Figures out if you have the correct jQuery version?

### $.setCurrencySymbol(symb)

Changes the variable `NETOCurrencySymbol` to be the param 'symb' the user places in.

On init `NETOCurrencySymbol` is a string of '$'.

### $.formatNumber(num, param)

Formats param `num` with the object given in param `param`.

`param` takes three properties:

- param['pf'] - appends the string specified as a prefix to the number formatted
- param['dp'] - it will format the number to the specificed number of decimal places.
- param['sp'] - adds the string specified at every thousand interval. Typically you would place a , here, so 10000 would be formatted as 10,000

### $.formatCurrency(num)  

Returns the param `num` by formating it with the `$.formatCurrency(num, param` function.

- Can change the symbol by changing var NETOCurrencySymbol to different string using the `$.setCurrencySymbol(symb)` function.

### $.create_netosd_data(data, sp)

Returns the string 'NSD1;' plus string that is returned from the function `$.create_netosd_data_rc(data, vids, sp)`.

This is called in the `$.do_ajax(module, qs, syn, fns)` function in a loop for each property in the param `qs`.

### $.create_netosd_data_rc(data, vids, sp)

Returns a string based off the values the users gives.

This is only ever called from this function itself or from the `$.create_netosd_data(data, sp)` function


### $.parse_netosd_data(data, sp)

Checks if param `data` has the string 'NSD1;' at the start of it, if it does it will return tmp[1]; which is calling another function with the following params `$.parse_netosd_data_rc(data, [], sp)`.

- The param `data` is checking data.substr(5);
- The param `sp` will be the users value or the string '|' if `sp` is null.

### $.parse_netosd_data_rc(data, vds, sp)
### $.js_var_dump(data, html, ind, vds)
### $.get_ajax_data(data)
### $.do_ajax(module, qs, syn, fns)

It does the ajax - npm sass --save

### $.soap_input_opt(rdata, def, vds)


### $.soap_default_opt(rdata, def[,vds])

Formats each instances in param `rdata` to resemble each instances in param `def`

### $.preload_images(images)

Preload images into the DOM 

### $.show_tooltip(obj, txt, setting, ubary)
### $.show_overlay(obj, id, html, setting)
### $.bgFrame()

It is an empty function, it will return undefined.

### $.parse_ntemplate(text, data)

A lot of RegExp and perl I think.

### $.escape_reserved(text) 

Replaces space with escapes e.g '\ '

### $.is_empty(text) 

Return true if param `text` is empty. If param `text` does not equal null or '' it will return undefined.


### $.isEmpty(text) 

Returns true if `param` text is null or ''.

### $.trimSpace(text) 

Calls $.trim(text) which trims white space at the start and end of param text

### $.isTrue(t)

Will check differently depended on the typeof param `t`.

- If param `t` is a string:
 - 'y', 'yes','on','true','okay','ok', 't','1'.
- If param `t` is a boolean:
 - it will return `t`
- If param `t` is a number:
 - It will return true if param `t` is greater then 0 or if param `t` is less then 0 it will return false.

### $.toInt(n [,def]) 

Change param `n` into an interger.

### $.toText(n)

Returns param `n` into a string, if it is null/undefined make it an empty string.

### $.toFloat(n[,def]) 

If param `n` is a number it returns it, if its a string it strips out spaces and '$'.

### $.timestamp() 

Returns the current time.

### $.randID() 

Returns random 5 numbers

### $.randString:(len [, str]) 

Returns random string of letters with a length of param `len`. you can define the random letters with str e.g $.randString(4, "hey") = "ehhe" 

### $.hasCSSClass(c) 

Returns true or false based off checking to see if param `c` is a class in any stylesheet from the loaded page.

### $.show_div_loading(div) 
### $.remove_div_loading(div)
### $.init_text_count(classname)
### $.update_text_count(cur)
### $.validate_email(email)

Validates an email and splits items into an array with the email as first array item and the string after the last '.'.

## POPUP BOX FUNCTIONS 

### $.overlay(opt)
### $.get_center_pos()
### $.move_center(anime)
### $.nShowActivity() / $.nHideActivity() 

Places over an overlay

### $.nHideActivity()
### $.nPopupBoxRescroll(bo)
### $.nPopupBoxReposition(bo, opt)
### $.nPopupBox(m, opt) 
### $.nClosePopupBox() 

Closes any popup boxes that are currently open

### $.isChecked(obj)
### $.setChecked(obj, val)

---

## COMMON FUNCTIONS 

---


## POST CODE SELECTOR 

### $.postcode_selectorInit(param) 

can adjust params e.g

 - 'items_returned', 'max_height', 'closetimer_secs', 'check_street', 'showparam'

### $.load_city_selector(id) 
### $.postcode_pl_close(id)
### $.postcode_change_country(id)
### $.postcode_lookup(id, typ, flk)
### $.setPSTRValue(id, city, state, zip, keyword, esp)
### $.getPSTRCache(id)

---

## BACK IN STOCK NOTIFICATION 

If a product is out of stock Neto lets users automatically be notified when it is back in stock.
- Add a Back-in-stock notification from thumbnails and product pages

### $.addNotifyBackInStock(sku, opts) 
### $.addNotifyContent(content_id, opts)

---

## STORE LOCATION FUNCTIONS 

Neto has a feature that lets users search through a database of stockists and see them on a map.

- Search for a stockist and get a successful result

### $.storeLocator_Init(param)
### $.geoGoToLocation(country, address) 
### $.geoSearchStores(country, zip, address)
### $.geoCleartMarkers()
### $.geoSetLocation(res, opts)
### $.geoStartSearch()
### $.geoCreateMarker(mkopts, data, ctr)
### $.geoCustAddMarker(lat, lng, name)
### $.geoHighLightMarker(id)
### $.geoSelectLocation(ind)
### $.getStoreLocatorCache(id)

---
 
## PRODUCT VARIATIONS 

### $.product_variationInit(param)
### $.productVariationSelected(spid, valid)
### $.getITMVARCache()
### $.kit_variationInit(param)
### $.kitVariationSelected(compid, csid)
### $.getKITVARCache()

---

## WISHLIST FUNCTIONS 

Neto let's users add products to a wishlist so they can purchase them at a later date.
- Add product to a wish list
- Remove product from a wish list

### $.addToWishList(param)
### $.toggleAddNew()
### $.closePopup(sku, newwishlist)
### $.btnLdFn(sku)

---

## ONREADY 

---
