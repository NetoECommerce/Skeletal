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

### $.initSearchField(opts)

---

## LOAD TEMPLATE 

### $.load_ajax_template(id, input, fns)

---

## COMPATIBILITY LIST 

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
### $.isFacebookView()
### $.isFacebookPurpose()
### $.addFacebookNView()
### $.addFacebookNPurpose()
### $.addNPurpose(npur)
### $.isJQVersion(cmp,vertxt)
### $.setCurrencySymbol(symb)
### $.formatNumber(num, param)
### $.formatCurrency(num)  

Formats param num to be correct dollar format e.g. $4.00

- Can change the symbol by changing var NETOCurrencySymbol to different string.

### $.create_netosd_data(data, sp)
### $.create_netosd_data_rc(data, vids, sp)
### $.parse_netosd_data(data, sp)
### $.parse_netosd_data_rc(data, vds, sp)
### $.js_var_dump(data, html, ind, vds)
### $.get_ajax_data(data)
### $.do_ajax(module, qs, syn, fns)
### $.soap_input_opt(rdata, def, vds)
### $.soap_input_opt(rdata, def, vds)
### $.preload_images(images)
### $.show_tooltip(obj, txt, setting, ubary)
### $.show_overlay(obj, id, html, setting)
### $.bgFrame()
### $.parse_ntemplate(text, data)
### $.escape_reserved(text) 

Replaces space with escapes e.g '\ '

### $.is_empty(text) 

Can only return true or not defined

### $.isEmpty(text) 

Boolean if param text is null - only works with strings

### $.trimSpace(text) 

Calls $.trim(text) which trims white space at the start and end of param text

### $.isTrue(t)
### $.toInt(n [,def]) 

Change n into an interger 

### $.toFloat(n[,def]) 

If n is a number it returns it, if its a string it strips out spaces and '$'

### $.toText(n[,def])

Returns n into a string, if null/undefined make it an empty string

### $.timestamp() 

Current time

### $.randID() 

random 5 numbers

### $.randString:(len [, str]) 

Random string of letters with a length of len. you can define the random letters with str e.g $.randString(4, "hey") = "ehhe" 

### $.hasCSSClass(c) 

checks to see if param c is a class in any stylesheet from the loaded page

### $.show_div_loading(div) 
### $.remove_div_loading(div)
### $.init_text_count(classname)
### $.update_text_count(cur)
### $.validate_email(email)

---

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

### $.addNotifyBackInStock(sku, opts) 
### $.addNotifyContent(content_id, opts)

---

## STORE LOCATION FUNCTIONS 

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

### $.addToWishList(param)
### $.toggleAddNew()
### $.closePopup(sku, newwishlist)
### $.btnLdFn(sku)

---

## ONREADY 

---
