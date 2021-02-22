// **** NAMESPACING ****
var TryJavaScript = {

    // Called on page load. Initializes the UI and prepares it for user interaction
	main: function() {

        // YOUR CODE HERE
        // 1. execute the loadProducts() and startEventListeners() methods
        this.loadProducts();
        this.startEventListeners();
	},

    // Takes an array of products (hardcoded), gets a reference to the left list
    // then loops over the products and adds an <option> element for each to the list
    loadProducts: function() {
        // use this data - hardcoded here, but could come from service, remote request, etc...
        var products = ["MATLAB", "Simulink", "Aerospace Blockset", "Aerospace Toolbox", "Antenna Toolbox", "Applix Link", "Audio System Toolbox", "Base Suite", "Bioinformatics Toolbox", "CDMA Reference Blockset", "Chemometrics Toolbox", "Communications Blockset", "Communications System Toolbox", "Computer Vision System Toolbox", "Control System Toolbox", "Curve Fitting Toolbox", "Data Acquisition Toolbox", "Database Toolbox", "Datafeed Toolbox", "Developers Kit for Texas Instruments DSP", "DO Qualification Kit", "DSP System Toolbox", "Econometrics Toolbox", "EDA Simulator Link DS", "EDA Simulator Link IN", "EDA Simulator Link MQ", "Embedded Coder", "Embedded IDE Link", "Embedded IDE Link CC", "Embedded IDE Link MU", "Embedded IDE Link TS", "Embedded IDE Link VS", "Embedded Target for Motorola HC12", "Embedded Target for OSEK/VDX", "Extended Symbolic Math Toolbox", "Filter Design HDL Coder", "Filter Design Toolbox", "Financial Derivatives Toolbox", "Financial Instruments Toolbox", "Financial Time Series Toolbox", "Financial Toolbox", "Fixed-Income Toolbox", "Fixed-Point Designer", "Frequency Domain System Identification Toolbox", "Full Suite", "Fuzzy Logic Toolbox", "GARCH Toolbox", "Gauges Blockset", "Global Optimization Toolbox", "HDL Coder", "HDL Verifier", "Higher-Order Spectral Analysis Toolbox", "IEC Certification Kit", "Image Acquisition Toolbox", "Image Processing Toolbox", "Instrument Control Toolbox", "LMI Control Toolbox", "LTE System Toolbox", "Mapping Toolbox", "MATLAB and Simulink Student Suite", "MATLAB Builder EX", "MATLAB Builder for COM", "MATLAB Builder NE", "MATLAB C/C++ Graphics Library", "MATLAB C/C++ Math Library", "MATLAB Coder", "MATLAB Compiler", "MATLAB Compiler SDK", "MATLAB Computational Finance Suite", "MATLAB Distributed Computing Server", "MATLAB Drive", "MATLAB Production Server", "MATLAB Report Generator", "MATLAB Runtime Server", "MATLAB Web Server", "MATLAB Wireless Design Suite", "MatrixVB", "MMLE Identification Toolbox", "Model Predictive Control Toolbox", "Model-Based Calibration Toolbox", "Motorola DSP Developers Kit", "Mu-Analysis and Synthesis Toolbox", "NAG Foundation Toolbox", "Neural Network Toolbox", "OPC Toolbox", "Optimization Toolbox", "Parallel Computing Toolbox", "Partial Differential Equation Toolbox", "Phased Array System Toolbox", "Polyspace Bug Finder", "Polyspace Client for Ada", "Polyspace Client for C/C++", "Polyspace Code Prover", "Polyspace Model Link SL", "Polyspace Model Link TL", "Polyspace Server for Ada", "Polyspace UML Link RH", "Powertrain Blockset", "Primary and Secondary School Suite", "QFT Frequency Domain Control Design Toolbox", "Real-Time Workshop Ada Coder", "Requirements Management Interface", "RF Toolbox", "Risk Management Toolbox", "Robotics System Toolbox", "Robust Control Toolbox", "Signal Processing Toolbox", "SimBiology", "SimEvents", "SimRF", "Simscape", "Simscape Driveline", "Simscape Electronics", "Simscape Fluids", "Simscape Multibody", "Simscape Power Systems", "Simulink 3D Animation", "Simulink Accelerator", "Simulink Code Inspector", "Simulink Coder", "Simulink Control Design", "Simulink Design Optimization", "Simulink Design Verifier", "Simulink Desktop Real-Time", "Simulink Fixed Point", "Simulink Parameter Estimation", "Simulink Performance Tools", "Simulink PLC Coder", "Simulink Real-Time", "Simulink Report Generator", "Simulink Response Optimization", "Simulink Test", "Simulink Verification and Validation", "Spline Toolbox", "Spreadsheet Link", "Standard Suite", "Stateflow", "Stateflow Coder", "Statistics and Machine Learning Toolbox", "Symbolic Math Toolbox", "System Identification Toolbox", "SystemTest", "Target Support Package", "Target Support Package FM5", "Target Support Package IC1", "Target Support Package TC2", "Target Support Package TC6", "ThingSpeak", "Trading Toolbox", "Vehicle Network Toolbox", "Vision HDL Toolbox", "Wavelet Toolbox", "WLAN System Toolbox", "xPC Target Embedded Option", "xPC TargetBox"];

        // 2. create a local variable.

        // 3. initialize the variable you just created so that 
        //    it references the left selectbox from the DOM
        //    See the help link for "getElementById" if you need a hint

        // 4. Loop over the product array, creating an <option> DOM element for each product
        //    and set it's text property to the product name,
        //    then add it to the selectBox in the DOM
        //    See the help link for "createElement" if you need a hint

        var leftSelectBox = document.getElementById("sourceList");

        for (index = 0; index < products.length;index++) {
            var opt = document.createElement('option');
            opt.text = products[index];
            leftSelectBox.appendChild(opt);
        }


    },

    startEventListeners: function() {

        // 5. Create four variables and initialize them so they reference the:
        //      - the left and right shuttle buttons << & >>
        //      - the left and right filter text fields

        var moveLeftVar = document.getElementById("moveLeft");
        var moveRightVar = document.getElementById("moveRight");

        var leftFilterVar = document.getElementById("leftFilterInput");
        var rightFilterVar = document.getElementById("rightFilterInput");



        // 6. Attach event listeners / callbacks to the shuttle buttons and the filter
        //    text fields so that they can respond to click and input events
        //    See the help link for addEventListener if you need a hint

        moveLeftVar.addEventListener("click",this.moveLeft);
        moveRightVar.addEventListener("click",this.moveRight);

        leftFilterVar.addEventListener("input",this.filterLeft);
        rightFilterVar.addEventListener("input",this.filterRight);
    },

    // **** CALLBACKS ****

    // Should execute when modeLeft << button is clicked.
    moveLeft: function(event) {

        // 7. Create references (variables) for the source and destination selectboxes
        //    as well as the left filter input.

        // 8. Pass those references to a function that will move the selected items
        //    from source to destination, sort the destination selectbox in "MATLABetical"
        //    order and clear the filter at the destination selectbox
        //
        //    MATLABetical is alphabetical, but MATLAB and Simulink always come first. ;)
        var sourceListVar = document.getElementById("sourceList");
        var destinationListVar = document.getElementById("destinationList");

        var leftFilterVar = document.getElementById("leftFilterInput");
        var rightFilterVar = document.getElementById("rightFilterInput");

        TryJavaScript.moveListAndClearFilter(destinationListVar,sourceListVar,leftFilterVar,rightFilterVar);
        TryJavaScript.sortSelectBox(sourceListVar);
        TryJavaScript.sortSelectBox(destinationListVar);
        //leftFilterVar.value = "";
        if (leftFilterVar.value != "") {
             TryJavaScript.filterList(sourceListVar,leftFilterVar.value);
        }

        if (rightFilterVar.value != "") {
            TryJavaScript.filterList(destinationListVar,rightFilterVar.value);
       }


    },

    // Should execute when modeRight >> button is clicked.
    moveRight: function(event) {

        // 9. Create references (variables) for the source and destination selectboxes
        //    as well as the right filter input.

        // 10. Pass those references to a function that will move the selected items
        //     from source to destination, sort the destination selectbox in "MATLABetical"
        //     order and clear the filter at the destination selectbox
        //
        //     Be aware of code duplication.

        var sourceListVar = document.getElementById("sourceList");
        var destinationListVar = document.getElementById("destinationList");

        var leftFilterVar = document.getElementById("leftFilterInput");
        var rightFilterVar = document.getElementById("rightFilterInput");

        TryJavaScript.moveListAndClearFilter(sourceListVar,destinationListVar,leftFilterVar,rightFilterVar);
        TryJavaScript.sortSelectBox(sourceListVar);
        TryJavaScript.sortSelectBox(destinationListVar);
        rightFilterVar.value = "";
        if (leftFilterVar.value != "") {
            TryJavaScript.filterList(sourceListVar,leftFilterVar.value);
        }

        if (rightFilterVar.value != "") {
            TryJavaScript.filterList(destinationListVar,rightFilterVar.value);
       }



    },

    // Should execute when the left filter text is changed
    filterLeft: function(event) { 
        
        // 11. Create a variable that references the left-side filter-text input

        // 12. Update the visibility for each option in the selectbox
        //     based on if it matches the filter-text.
        //     See the help link on the page for the "hidden" property
        //     and how you might leverae it here.
        var sourceListVar = document.getElementById("sourceList");
        var aStr = document.getElementById("leftFilterInput").value;
        TryJavaScript.filterList(sourceListVar,aStr);
    },

    // Should execute when the right filter text is changed
    filterRight: function(event) {   
        
        // 13. Repeat the last two steps for the right-side filter-text input

        // 14. Note that steps 7-13 can create a lot of duplicate code. 
        //     Consider refactoring it out to utility methods at this point.
        var sourceListVar = document.getElementById("destinationList");
        var aStr = document.getElementById("rightFilterInput").value;
        TryJavaScript.filterList(sourceListVar,aStr);
        
    },


    // **** UTILITIES ****

    sortSelectBox: function(selElem) {

        // 15. Write a utility function that takes
        //     a selectBox reference and sort it's options.
        //     - this could be used for both selectBoxes, reducing duplication.
        var tmpAry = new Array();
        var topProds = new Array();
        k = 0;
        for (var i=0;i<selElem.options.length;i++) {
            tmpAry[i] = new Array();
            if (selElem.options[i].text == "MATLAB" || selElem.options[i].text == "Simulink") {
                topProds[k] = new Array();
                topProds[k][0] = selElem.options[i].text;
                topProds[k][1] = selElem.options[i].value;
                k++;
                continue;
            }
            tmpAry[i][0] = selElem.options[i].text;
            tmpAry[i][1] = selElem.options[i].value;
        }
        tmpAry.sort();
        while (selElem.options.length > 0) {
            selElem.options[0] = null;
        }
        for (var j =0; j < topProds.length; j++) {
            op = new Option(topProds[j][0],topProds[j][1]);
            selElem.options[j] = op;
        }
        for (var i=j;i<tmpAry.length;i++) {
            var op = new Option(tmpAry[i][0], tmpAry[i][1]);
            selElem.options[i] = op;
        }
        return;   

    },  

    filterList: function(selectBoxVar,aStr) {

        // 16. Write a utility function that takes
        //     a selectBox and string and hides options in the selectBox unless
        //     they match the string.
        for (var option of selectBoxVar.options) {
            if (!(option.text.toLowerCase().includes(aStr.toLowerCase()))) {
                option.hidden = true;
            } else {
                option.hidden = false;
            }
        }
    },

    moveListAndClearFilter: function(sourceListVar,destinationListVar,leftFilterVar,rightFilterVar) {

        // 17. Since you will be movings lists, sort and clearing filters
        //     in two cases, it might be useful two have a common function.
        var selectedOpts = [];
        for (var option of sourceListVar.options) {
            if (option.selected) {
                selectedOpts.push(option);
            }
        }

        for (var option of selectedOpts) {
            destinationListVar.appendChild(option);
        }


       // leftFilterVar.value ="";
       // rightFilterVar.value="";
        
    }
}
