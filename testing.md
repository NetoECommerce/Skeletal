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

If  the address is successfully added to the addressbook it will display a popup to the user with the content 'Address Updated Successfully'

If thhe address fails to add to the addressbook it will store a the function `$.parse_ntemplate(param['msg'][data['msg']], data)` in the variable msg.

### $.del_addressbook_entry()

Deletes an address from the addressbook. This calls  the same api as the `$.add_addressbook_entry()` function - 'addressbook'

### $.addressbook_select(param)

This function will display a certain address based off the address the user selects.

There is an event listener when the `select[id^="addr_id"]` changes, if this select box doesn't have the value of 'n' it will cause an ajax request that fetches and displays the correct address.

`$('#ship_first_name').val(data['loc']['ship_first_name']);`

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

This function is called from the `$.addToCartInit(param)` function. It looks to have all the default values needed when adding to cart / displaying that a product has been added to cart.

If the function `$.isMobileView()` or the param `nofancybox` is true it will display different content in the success messages.


### $.addToCartInit(param)

This function calls an ajax request to the following api - /ajax/addtocart - to add a product to the cart.

At the bottom of the function to removes all event listener on .addtocart and .delfromcart and then re-adds click event listener which calls the function `$.addCartItem(skuo, qtyo, fns)`

```
            $(document).off('click', ".addtocart");
            $(document).on('click', ".addtocart", function() {
                $.addCartItem('sku' + $(this).attr('rel'), 'qty' + $(this).attr('rel'));
            });
            $(document).off('click', ".delfromcart");
            $(document).on('click', ".delfromcart", function() {
                $.addCartItem('sku' + $(this).attr('rel'), 'qty' + $(this).attr('rel'));
            });
```

### $.getAddToCartParam()

Returns NAddToCartData.

On init NAddToCartData equals a new Object;

### $.addChildCartItem(skuo, qtyo)
### $.addCartItem(skuo, qtyo[, fns])

Add all the functions params to an object called `msgdata`.

This function is called with the following events:

```
$(document).on('click', ".addtocart", function() {
    $.addCartItem('sku' + $(this).attr('rel'), 'qty' + $(this).attr('rel'));
});
$(document).on('click', ".delfromcart", function() {
    $.addCartItem('sku' + $(this).attr('rel'), 'qty' + $(this).attr('rel'));
});
```

- param `skuo` = Product SKU

The function takes the rel attribute from the button the user clicked, finds the hidden input field with an id attribute of the same value of param `skuo` and stores it into a variable of `tmpskuo`, and then gives the `msgdata` object a property of 'sku' with the value of var `tmpskuo`.

- param `qtyo` = Quantity of the product the user has selected

Find the hidden input with the name of 'qty' + the rel attribute the user clicked, and then stores this as a property of `msgdata` as 'qty'.

Stores other product specific values in `msgdata` such as model and src path of the thumb view of the products main image.

Calls the `$.do_ajax()` function to 'AddItem'

### $.addMultipleCartItems(id)
### $.removeCartItem(ind, fns)

### $.buildCartItem(data)

At the bottom of the function to removes the click event listener on .delfromcart and then re-adds click event listener which calls the function `$.removeCartItem($(this).attr('rel'))`

---

## AJAX SEARCH 

Neto's search feature is powered by AJAX through Neto.js

- Standard search
- Search with AJAX dropdown

### $.initSearchField(opts)

Builds the results of the search field based off the input the user places in a html element with the attribute 'nsearch-init'. 

The function places the html element with the attrbute 'nsearch-id' in a variable called 'initchk'.

It will then give initchk a value of NESearchTimers length. On initial load this is set to an empty array.

There is a keyup event listener which build the search results shell and then calls an ajax request to the api 'ajax_search' 
There is also a click event listener on the html element which will hide the item with the class 'pl-class', which is the search results container.

---

## LOAD TEMPLATE 

On product and cart pages there are AJAX templates which can refresh based on the users input.

- Loading & refreshing AJAX templates on products with variations
- Various AJAX templates on cart & checkout pages

### $.load_ajax_template(id, input, fns)

Calls an ajax request to the api 'ajax_template'.

Called in the `$.productVariationSelected(spid, valid)` function.

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

Sets up all the default values for the 'endlessScrollData' object and then uses `$.soap_default_data(param, defvals)` function to make sure the param `param` is set correctly.

` $.endlessScrollData = param = $.soap_default_data(param, defvals);`

Calls the `$.endlessScroll_updatePaging()` function.

Then has a scroll event on window checking if `($(window).scrollTop() >= $(document).height() - $(window).height() - $.endlessScrollData['bottom_offset'])`

If true it will call the `$.endlessScroll_loadPage()` with the following param which is the page number:

`$.endlessScroll_loadPage(parseInt($.endlessScrollData.current_page) + 1);`

### $.endlessScroll_loadPage(pgnum)

Creates an empty div and appends classes and content to it.

Does an ajax get request - $.get(url, function(data){}

### $.endlessScroll_updatePaging()

Replaces content in $.endlessScrollData['page']['replace_pagination_result'] for $.endlessScrollData['total_showing'] and $.endlessScrollData['total_items']. Using the `$.parse_ntemplate()` function.

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

This function will return two pieces of data in an array; [data, kvdata].

The first piece of data is used in the function `$.parse_netosd_data(data, sp)` as what it returns if a variable txt equals 'NSD1;', else that function will return null.

- The param `sp` will be the users value or the string '|' if `sp` is null.

Checking if variable tp equals one of a few symbols, then loops until variable done is true AND cur is less then the length of variable data.

In this loop we are adding the numbers/characters from variable data to variable chr. 

If chr doesn't equal the string '|' it will be added to the variable len.

Then depending on what symbol typ is, it will do a different loop.

### $.js_var_dump(data[, html, ind, vds])

This is primarly used to cause an alert for the user, the content of the alert depends on the param `data`.


### $.get_ajax_data(data)

This is only every called from the `$.get_ajax_data(data)` function. The param `data` is the response after an ajax call is successful.

### $.do_ajax(module, qs, syn, fns)

Param `module` is where you are doing the ajax call to. e.g module would be used in a ajax function to go to the 'url' property: '/ajax/' + module.

Param `qs` should be an Object of data. This function will start by checking formating `qs` into an Object.

The function will then loop through each item in param `qs` and append it into one string with each item connected with a '&'.

This is then used in the ajax function as the 'data' property.

Param `syn` is used in the ajax function as the 'async' property.

Param `fns` is used once the ajax function comes back. 

We do an ajax request, if the request was a success we store the response in a variable rdata which is a two part Array. We split the two Array parts into two variables:

`var code = rdata[0].toUpperCase();`
`var rdata = rdata[1];`



### $.soap_input_opt(rdata, def, vds)

If there is not a param `rdata` and it is not an instance of an Object, it will make param `rdata` an empty object. It will then return `$.soap_default_data(rdata, def, vds)`.

### $.soap_default_data(rdata, def[,vds])

Formats each instances in param `rdata` to the instances in param `def` if there is no value or if it doesn't meet a set requirement.

The function returns the param `rdata`.

### $.preload_images(images)

Preload images into the DOM 

Called in the $.addToWishList(param) function

### $.show_tooltip(obj, txt, setting, ubary)
### $.show_overlay(obj, id, html, setting)
### $.bgFrame()

It is an empty function, it will return undefined.

### $.parse_ntemplate(text, data)

Returns the param `text` aftr looping through and using regular expression to replace elements from param `text` with elements from param `data`.

new RegExp(pattern[, flags])

g - global match; find all matches rather than stopping after the first match
i - ignore case
m - multiline; treat beginning and end characters (^ and $) as working over multiple lines (i.e., match the beginning or end of each line (delimited by \n or \r), not only the very beginning or end of the whole input string)

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

Parse a class name as the parameter e.g 'inputtext', which will find the textarea that you wish to count the text of.

It will loop through all the DOM elements with the class of param `classname` and cal the $.update_text_count(cur) function with that element as param `cur`.

There is an event listener of keyup and blur that will call the $.update_text_count(cur) function.

Used in the `cart/voucher.template.html` and the `customer/mystore/edit/template.html`

### $.update_text_count(cur)

Uses the DOM element of param `cur` and stores that elements attribute 'id' in a variable of `id`. Then it will for the DOM element of '#' + id + 'ctr'. 

It will then store that elements attribute 'ref' in a variable `len`. It then places in the amount of characters left available for the field '#' + id + 'ctr'. This value equals variable `len` minus the current value of #' + id + 'ctr'.


### $.validate_email(email)

Validates an email and splits items into an array with the email as first array item and the string after the last '.'.

## POPUP BOX FUNCTIONS 

### $.overlay(opt)

appends an overlay with 0.5 opacity across the whole document with a z-index of 99999.

If the window is resized this overlay will be given new width and height styles at the same sizes to the width and height of the document.

### $.get_center_pos()

Returns an object with two elements; 'top' and 'left' which finds the center of the element we call from to the window.

### $.move_center(anime)

Moves the element from its current position to the center of the screen using the `$.get_center_pos()` function.

### $.nShowActivity() 

Shows a div with the class 'nactivity'.

It first calls the `$.nHideActivity()` function, then creats the html element with the nactivity class, appends it to the body, centers it to the window and the fades the div in.

### $.nHideActivity() 

For each 'div.nactivity[nactivity-status="active"]' it will fade out and hide the div.

### $.nPopupBoxRescroll(bo)
### $.nPopupBoxReposition(bo, opt)
### $.nPopupBox(m, opt) 

Shows a popup box with the content of param `m`.

### $.nClosePopupBox() 

Closes any popup boxes that are currently open

### $.isChecked(obj)
### $.setChecked(obj, val)

---

## COMMON FUNCTIONS 

isEmpty(inputStr)

Almost the exact function from the UTIL function `$.isEmpty(text)`, returns true if inputStr is null or "".

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

Adds users details to the Notify Back In Stock section in the cpanel. The user fills out a form with their name and email which then has a button that triggers this function:

`<input class="btn btn-success" type="button" data-dismiss="modal" value="Save My Details" onClick="javascript:$.addNotifyBackInStock('[@SKU@]', '');">`

Input Fields:

'full_name': id - 'from_name', 
'email_address': id - 'from'.

$.do_ajax function to the 'notifyme' api.

### $.addNotifyContent(content_id, opts)

---

## STORE LOCATION FUNCTIONS 

Neto has a feature that lets users search through a database of stockists and see them on a map.

- Search for a stockist and get a successful result

### $.storeLocator_Init(param)

Sets up default values in an object called `defvals`. 

'default_lat': -27.000,
'default_lng': 133.000,

Center of Australia.

Uses the $.soap_default_data(param, defvals) function to scrub through and places all the correct values in.

Places this object in an object 'nStoreLocatorData['param']'.

### $.geoGoToLocation(country, address) 

Pulls 'param' with the $.getStoreLocatorCache function and places it in the variable `param`.

End result is to use the $.geoSetLocation function.

### $.geoSearchStores(country, zip, address)

Pulls 'param' with the $.getStoreLocatorCache function and places it in the variable `param`.

### $.geoCleartMarkers()

Pulls 'param' with the $.getStoreLocatorCache function and places it in the variable `param`.
Pulls 'markers' with the $.getStoreLocatorCache function and places it in the variable `markers`.

### $.geoSetLocation(res, opts)

Pulls 'param' with the $.getStoreLocatorCache function and places it in the variable `param`.
Pulls 'map' with the $.getStoreLocatorCache function and places it in the variable `map`.


### $.geoStartSearch()

Pulls 'param' with the $.getStoreLocatorCache function and places it in the variable `param`.
Pulls 'map' with the $.getStoreLocatorCache function and places it in the variable `map`.

### $.geoCreateMarker(mkopts, data, ctr)

Pulls 'param' with the $.getStoreLocatorCache function and places it in the variable `param`.
Pulls 'map' with the $.getStoreLocatorCache function and places it in the variable `map`.
Pulls 'info' with the $.getStoreLocatorCache function and places it in the variable `info`.
Pulls 'markers' with the $.getStoreLocatorCache function and places it in the variable `markers`.

### $.geoCustAddMarker(lat, lng, name)

Pulls 'param' with the $.getStoreLocatorCache function and places it in the variable `param`.
Pulls 'map' with the $.getStoreLocatorCache function and places it in the variable `map`.
Pulls 'markers' with the $.getStoreLocatorCache function and places it in the variable `markers`.

### $.geoHighLightMarker(id)

Pulls 'param' with the $.getStoreLocatorCache function and places it in the variable `param`.

### $.geoSelectLocation(ind)

Pulls 'markers' with the $.getStoreLocatorCache function and places it in the variable `markers`.

### $.getStoreLocatorCache(id)

Returns the param of object `nStoreLocatorData[id]` if found, else returns and empty object.

This is used at the start of each Neto.js Store location function expect $.storeLocator_Init, which sets up the object nStoreLocatorData.

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

Has an event listener on '#wishlisttoggle', check when it toggles. When this event is called it has a simple if statement which display html inside the '#savemsg' DOM element.

If $('#wishlisttoggle').is(":visible") it will display:

- NWishListData['param']['msg']['ADDWISHLIST']

Else:

- NWishListData['param']['msg']['SAVECHANGES']

### $.closePopup(sku, newwishlist)
### $.btnLdFn(sku)

---

## ONREADY 

---
