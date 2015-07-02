var ajaxtarget;
var ajaxcallinprogress = false;
var ajaxcallstack = new Array();

function InsertAjax(url, target, parameters, elementTarget) {
    if (typeof (target) != "function") {
        setLoadingDiv(target);
    }
    else if (elementTarget) 
    {
        setLoadingDiv(elementTarget);
    }
    if (ajaxcallinprogress) {
        ajaxcallstack.push([url, target, parameters]);
        return;
    }
    
    ajaxcallinprogress = true;
    ajaxtarget = target;    
    if (!parameters || parameters.length == 0) {
        NormalAjaxCall(url, target);
    }
    else {
        PostAjaxCall(url, target, parameters);
    }
    if (typeof target != 'function') {
        target.className = '';

        //this will display a message that the item is being added to the cart
        var addingToCartMsgNode = document.getElementById('addingToCart');
        var addedToCartMsgNode = document.getElementById('addedToCart');
        if (addingToCartMsgNode && addedToCartMsgNode) {
            addingToCartMsgNode.style.display = 'none';
            addedToCartMsgNode.style.display = 'block';
        } // if the msg nodes exist
    } // if (typeof target != 'function')
}

function PostAjaxCall(url, target, parameters) {

    xmlhttp = false;
    if (window.XMLHttpRequest) { // Mozilla, Safari,...
        xmlhttp = new XMLHttpRequest();
        if (xmlhttp.overrideMimeType) {
            // set type accordingly to anticipated content type
            //xmlhttp.overrideMimeType('text/xml');
            xmlhttp.overrideMimeType('text/html');
        }
    } else if (window.ActiveXObject) { // IE
        try {
            xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) { }
        }
    }
    if (!xmlhttp) {
        alert('Cannot create XMLHTTP instance');
        return false;
    }
    xmlhttp.onreadystatechange = stateChange;
    xmlhttp.open('POST', url, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    try {
        xmlhttp.setRequestHeader("Content-length", parameters.length);
        xmlhttp.setRequestHeader("Connection", "close");
    }
    catch (Error) { }
    xmlhttp.send(parameters);
}

function NormalAjaxCall(url, target)
{
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = stateChange;
        xmlhttp.open("GET", url, true);
        xmlhttp.send(null);
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        xmlhttp.onreadystatechange = stateChange;
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }
}

function stateChange() {

    if (xmlhttp.readyState == 4) {
	if (xmlhttp.status == 200 || xmlhttp.status == 0) {
	
            // process whatever has been sent back here
            if (typeof (ajaxtarget) == "function")
            {
                ajaxtarget();
            } //if (typeof (ajaxtarget) == "function")
            else
            {
                ajaxtarget.innerHTML = xmlhttp.responseText;
            }// else
        } //if (xmlhttp.status == 200)
        else {
            alert("There was a problem in the returned data");
        }//else
        ajaxcallinprogress = false;
        if (ajaxcallstack.length > 0) {
            var call = ajaxcallstack.pop();
            InsertAjax(call[0], call[1], call[2]);
        } // if (ajaxcallstack.length > 0)
        
    } //if (xmlhttp.readyState == 4)
} //function stateChange()

function setLoadingDiv(element) {

    //this will display a message that the item is being added to the cart
    var addingToCartMsgNode = document.getElementById('addingToCart');
    var addedToCartMsgNode = document.getElementById('addedToCart');
    if (addingToCartMsgNode && addedToCartMsgNode) {
        addingToCartMsgNode.style.display = 'block';
        addedToCartMsgNode.style.display = 'none';
    } // if the msg nodes exist
    
        element.className = 'miniCartLoading';      
}

function updateMiniCart()
{
    InsertAjax("x-minicartcontent.aspx?randomnumber=" + Math.floor(Math.random() * 10000), document.getElementById("vMiniCart"));    
}

function ajaxifyAddToCartForm(form, productimageid, productID, variantID) {
    if (form == null || form.tagName.toLowerCase() != 'form') {
        form = document.forms[0];
    }

    if(productimageid ==  null || productimageid == "")
    	productimageid = "productImage";
    try {
        form.rel = form.onsubmit;
        if (form.action.indexOf("ajaxcall") < 0) {
            if (form.action.indexOf("?")) {
                form.action += "&ajaxcall=true";
            }
            else {
                form.action += "?ajaxcall=true";
            }
        }

        var button = document.getElementById("AddToCartButton_" + productID + "_" + variantID);

        button.rel = button.onclick;
        button.onclick = function () {
        //var oldwebformsubmit = WebForm_OnSubmit;
        var oldwebformsubmit = (typeof WebForm_OnSubmit === "undefined") ? 0 : WebForm_OnSubmit;
            var oldformsubmit = form.onsubmit;
            form.onsubmit = WebForm_OnSubmit = function () {
                var validator = eval("AddToCartForm_" + productID + "_" + variantID + "_Validator");
                if (validator != null && typeof validator == 'function' && !validator(form)) {
                    return false;
                }

                if (this.rel == null || this.rel()) {
                    MoveElementToElement(document.getElementById(productimageid), document.getElementById('vMiniCart'));
                    form.__EVENTARGUMENT.value = "0_" + productID + "_" + variantID;
                    PostAjaxForm(form, productID, variantID);
                }
                return false;
            }
            form.onsubmit();
            WebForm_OnSubmit = oldwebformsubmit;
            form.onsubmit = oldformsubmit;
            return false;
        };        
    }
    catch (Error) {
        //should just post to cart.
    }
}

function PostAjaxForm(form, productId, variantId) {
    ExpandMiniCart();
    var nameFormat = '_' + productId.toString() + '_' + variantId.toString();

    var params = "";
    var inputs = form.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        if (params != "" && params[params.length -1] != "&") {
            params += "&";
        }
        if (inputs[i].name != "" && inputs[i].value) {
            if (inputs[i].type != "checkbox" || inputs[i].checked)
                if ((inputs[i].name.indexOf(nameFormat) >= 0) ||
                    (inputs[i].name.indexOf("__EVENTVALIDATION") >= 0) ||
                    (inputs[i].name.indexOf("__EVENTARGUMENT") >= 0) ||
                    (inputs[i].name.indexOf("__VIEWSTATE") >= 0)) {
                    params += inputs[i].name + "=" + WebForm_EncodeCallback(inputs[i].value);
                }
        }
    }
    var selects = form.getElementsByTagName("select");
    for (var i = 0; i < selects.length; i++) {
        if (params != "" && params[params.length - 1] != "&") {
            params += "&";
        }
        if (selects[i].name != "") {
            if (selects[i].name.indexOf(nameFormat) >= 0) {
                var currentselect = selects[i];
                var currentselectvalue = currentselect[currentselect.selectedIndex].value;
                params += selects[i].name + "=" + escape(currentselectvalue);
            }
        }
    }
    InsertAjax(form.action, updateMiniCart, params, document.getElementById("vMiniCart"));
    if (CollapseMiniCartTimeout)
        clearTimeout(CollapseMiniCartTimeout);
    CollapseMiniCartTimeout = setTimeout('CollapseMiniCart()', 5000);
}

var CollapseMiniCartTimeout;

function MoveElementToElement(movingelement, targetelement) {
    jQueryMoveElementToElement(movingelement, targetelement);
}

function jQueryMoveElementToElement(movingelement, targetelement) {
    try {
        var $old = $(movingelement);
        var newOffset = $(targetelement).offset();
        var oldOffset = $old.offset();
        var $temp = $old.clone().appendTo('body');
        $temp
          .css('position', 'absolute')
          .css('left', oldOffset.left)
          .css('top', oldOffset.top)
          .css('zIndex', 9999);
        $temp.animate({ 'top': newOffset.top + 10, 'left': newOffset.left + 40, 'width': 0, 'height': 0 }, 1000, "swing", function() {
            $temp.remove();
        });
    }
    catch (err) {
        MooToolsMoveElementToElement(movingelement, targetelement);
    }
}


function MooToolsMoveElementToElement(movingelement, targetelement) {
    try {
        var bdy = document.getElementsByTagName("body")[0];
        var movedcopy = movingelement.clone();
        var startOffset = movingelement.getPosition(bdy);
        var stopOffset = targetelement.getPosition(bdy);
        movedcopy.setStyle("position", "absolute");
        movedcopy.setStyle("top", startOffset.y);
        movedcopy.setStyle("left", startOffset.x);
        movedcopy.setStyle("z-index", "10000");
        movedcopy.inject(bdy);
        movedcopy.makeDraggable();

        new Fx.Move(movedcopy, {
            relativeTo: targetelement,
            position: 'centerTop',
            duration: 800
        }).start();

        //movedcopy.tween('height', 0);
        movedcopy.get('tween', { property: 'height', duration: 1000 }).start(0);
    }
    catch (err) {
        //Handle errors here
    }
}


function ToggleMiniCart(toggleButton) {
    if (toggleButton.className == 'miniCartCollapsed') {
        ExpandMiniCart();
    }
    else {
        CollapseMiniCart();
    }
}

function CollapseMiniCart() {
    var toggleButton = document.getElementById('miniCartArrowLink');
    var cartItemsNode = document.getElementById('miniAbsWrap');

    if (toggleButton) toggleButton.className = 'miniCartCollapsed';
    if (cartItemsNode) cartItemsNode.className = 'hideitems';
}

function ExpandMiniCart() {
    var toggleButton = document.getElementById('miniCartArrowLink');
    var cartItemsNode = document.getElementById('miniAbsWrap');
    
    if(toggleButton) toggleButton.className = 'miniCartExpanded';
    if (cartItemsNode) cartItemsNode.className = 'showitems';
}