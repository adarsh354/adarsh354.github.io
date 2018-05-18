
function disapear1()
{
	document.getElementById("tablep").style.display="block";
	document.getElementById("tablec").style.display="none";
	document.getElementById("ccycletable").style.display="none";
	document.getElementById("ccycle").style.display="none";
	document.getElementById("result").style.display="none";
	document.getElementById("navbutton2").style.backgroundColor="black";
	document.getElementById("navbutton3").style.backgroundColor="black";
	document.getElementById("navbutton2").style.color="white";
	document.getElementById("navbutton3").style.color="white";
	document.getElementById("navbutton1").style.backgroundColor="white";
	document.getElementById("navbutton1").style.color="black";
	document.getElementById("pcycle").style.display="block";
	document.getElementById("ccycletable").style.display="none";
	document.getElementById("pcycletable").style.display="none";
	document.getElementById("resultbutton").style.display="none";
}
function disapear2()
{
	document.getElementById("tablec").style.display="block";
	document.getElementById("tablep").style.display="none";
	document.getElementById("ccycletable").style.display="none";
	document.getElementById("pcycle").style.display="none";
	document.getElementById("result").style.display="none";
	document.getElementById("navbutton1").style.backgroundColor="black";
	document.getElementById("navbutton3").style.backgroundColor="black";
	document.getElementById("navbutton1").style.color="white";
	document.getElementById("navbutton3").style.color="white";
	document.getElementById("navbutton2").style.backgroundColor="white";
	document.getElementById("navbutton2").style.color="black";
	document.getElementById("ccycle").style.display="block";
	document.getElementById("ccycletable").style.display="none";
	document.getElementById("pcycletable").style.display="none";
	document.getElementById("resultbutton").style.display="none";
}
function disapear3()
{
	document.getElementById("tablep").style.display="none";
	document.getElementById("tablep").style.display="none";
	document.getElementById("pcycle").style.display="none";
	document.getElementById("ccycle").style.display="none";
	document.getElementById("navbutton1").style.backgroundColor="black";
	document.getElementById("navbutton2").style.backgroundColor="black";
	document.getElementById("navbutton1").style.color="white";
	document.getElementById("navbutton2").style.color="white";
	document.getElementById("navbutton3").style.backgroundColor="white";
	document.getElementById("navbutton3").style.color="black";
	document.getElementById("result").style.display="block";
	document.getElementById("ccycletable").style.display="block";
	document.getElementById("pcycletable").style.display="block";
	document.getElementById("resultbutton").style.display="block";
}
function entera()
{
	var a=document.getElementById("math1ext").value;
	var b=document.getElementById("math1int").value;
	if(a>60||b>40)
	{
		alert("INVALID ENTRY");
		document.getElementById("math1ext").value=' ';
	    document.getElementById("math1int").value=' ';

	}
	else
	{
		document.getElementById("extm1").innerHTML=a;
	    document.getElementById("intm1").innerHTML=b;
	    document.getElementById("math1ext").disabled=true;
	    document.getElementById("math1int").disabled=true;
	}


}
function enterb()
{
	var a=document.getElementById("physicext").value;
	var b=document.getElementById("physicint").value;
	if(a>60||b>40)
	{
		alert("INVALID ENTRY");
		document.getElementById("physicext").value=' ';
	    document.getElementById("physicint").value=' ';
	}
	else
	{
	document.getElementById("extp").innerHTML=a;
	document.getElementById("intp").innerHTML=b;
	document.getElementById("physicext").disabled=true;
	document.getElementById("physicint").disabled=true;
	}

}
function enterc()
{
	var a=document.getElementById("mechext").value;
	var b=document.getElementById("mechint").value;
	if(a>60||b>40)
	{
		alert("INVALID ENTRY");
		document.getElementById("mechext").value=' ';
	    document.getElementById("mechint").value=' ';
	}
	else
	{
	document.getElementById("extmech").innerHTML=a;
	document.getElementById("intmech").innerHTML=b;
	document.getElementById("mechext").disabled=true;
	document.getElementById("mechint").disabled=true;
	}

}
function enterd()
{
	var a=document.getElementById("elecext").value;
	var b=document.getElementById("elecint").value;
	if(a>60||b>40)
	{
		alert("INVALID ENTRY");
		document.getElementById("elecext").value=' ';
	    document.getElementById("elecint").value=' ';
	}
	else
	{
	document.getElementById("extele").innerHTML=a;
	document.getElementById("intele").innerHTML=b;
	document.getElementById("elecext").disabled=true;
	document.getElementById("elecint").disabled=true;
	}

}
function entere()
{
	var a=document.getElementById("civilext").value;
	var b=document.getElementById("civilint").value;
	if(a>60||b>40)
	{
		alert("INVALID ENTRY");
		document.getElementById("civilext").value=' ';
	    document.getElementById("civilint").value=' ';
	}
	else
	{
	document.getElementById("extciv").innerHTML=a;
	document.getElementById("intciv").innerHTML=b;
	document.getElementById("civilext").disabled=true;
	document.getElementById("civilint").disabled=true;
	}

}
function enterf()
{
	var a=document.getElementById("phylext").value;
	var b=document.getElementById("phylint").value;
	if(a>60||b>40)
	{
		alert("INVALID ENTRY");
		document.getElementById("phylext").value=' ';
	    document.getElementById("phylint").value=' ';
	}
	else
	{
	document.getElementById("extpl").innerHTML=a;
	document.getElementById("intpl").innerHTML=b;
	document.getElementById("phylext").disabled=true;
	document.getElementById("phylint").disabled=true;
	}

}
function enterg()
{
	var a=document.getElementById("workext").value;
	var b=document.getElementById("workint").value;
	if(a>60||b>40)
	{
		alert("INVALID ENTRY");
		document.getElementById("workext").value=' ';
	    document.getElementById("workint").value=' ';
	}
	else
	{
	document.getElementById("extwl").innerHTML=a;
	document.getElementById("intwl").innerHTML=b;
	document.getElementById("workext").disabled=true;
	document.getElementById("workint").disabled=true;
	}

}
function enterh()
{
	var a=document.getElementById("math2ext").value;
	var b=document.getElementById("math2int").value;
	if(a>60||b>40)
	{
		alert("INVALID ENTRY");
		document.getElementById("math2ext").value=' ';
	    document.getElementById("math2int").value=' ';
	}
	else
	{
	document.getElementById("extm2").innerHTML=a;
	document.getElementById("intm2").innerHTML=b;
	document.getElementById("math2ext").disabled=true;
	document.getElementById("math2int").disabled=true;
	}

}
function enteri()
{
	var a=document.getElementById("chemext").value;
	var b=document.getElementById("chemint").value;
	if(a>60||b>40)
	{
		alert("INVALID ENTRY");
		document.getElementById("chemext").value=' ';
	    document.getElementById("chemint").value=' ';
	}
	else
	{
	document.getElementById("extch").innerHTML=a;
	document.getElementById("intch").innerHTML=b;
	document.getElementById("chemext").disabled=true;
	document.getElementById("chemint").disabled=true;
	}

}
function enterj()
{
	var a=document.getElementById("caedext").value;
	var b=document.getElementById("caedint").value;
	if(a>60||b>40)
	{
		alert("INVALID ENTRY");
		document.getElementById("caedext").value=' ';
	    document.getElementById("caedint").value=' ';
	}
	else
	{
	document.getElementById("extcad").innerHTML=a;
	document.getElementById("intcad").innerHTML=b;
	document.getElementById("caedext").disabled=true;
	document.getElementById("caedint").disabled=true;
	}

}
function enterk()
{
	var a=document.getElementById("elnext").value;
	var b=document.getElementById("elnint").value;
	if(a>60||b>40)
	{
		alert("INVALID ENTRY");
		document.getElementById("elnext").value=' ';
	    document.getElementById("elnint").value=' ';
	}
	else
	{
	document.getElementById("exteln").innerHTML=a;
	document.getElementById("inteln").innerHTML=b;
	document.getElementById("elnext").disabled=true;
	document.getElementById("elnint").disabled=true;
	}

}
function enterl()
{
	var a=document.getElementById("pcdext").value;
	var b=document.getElementById("pcdint").value;
	if(a>60||b>40)
	{
		alert("INVALID ENTRY");
		document.getElementById("pcdext").value=' ';
	    document.getElementById("pcdint").value=' ';
	}
	else
	{
	document.getElementById("extpcd").innerHTML=a;
	document.getElementById("intpcd").innerHTML=b;
	document.getElementById("pcdext").disabled=true;
	document.getElementById("pcdint").disabled=true;
	}

}
function enterm()
{
	var a=document.getElementById("chelext").value;
	var b=document.getElementById("chelint").value;
	if(a>60||b>40)
	{
		alert("INVALID ENTRY");
		document.getElementById("chelext").value=' ';
	    document.getElementById("chelint").value=' ';
	}
	else
	{
	document.getElementById("extcl").innerHTML=a;
	document.getElementById("intcl").innerHTML=b;
	document.getElementById("chelext").disabled=true;
	document.getElementById("chelint").disabled=true;
	}

}
function entern()
{
	var a=document.getElementById("pclext").value;
	var b=document.getElementById("pclint").value;
	if(a>60||b>40)
	{
		alert("INVALID ENTRY");
		document.getElementById("pclext").value=' ';
	    document.getElementById("pclint").value=' ';
	}
	else
	{
	document.getElementById("extcpl").innerHTML=a;
	document.getElementById("intcpl").innerHTML=b;
	document.getElementById("pclext").disabled=true;
	document.getElementById("pclint").disabled=true;
	}
}
function calculate()
{
	var a,b,c,d,e,f,g,h,i,j,k,l,n;
	a=(Number(document.getElementById("extm1").innerHTML))+(Number(document.getElementById("intm1").innerHTML));
	b=(Number(document.getElementById("extp").innerHTML))+(Number(document.getElementById("intp").innerHTML));
	c=(Number(document.getElementById("extmech").innerHTML))+(Number(document.getElementById("intmech").innerHTML));
	d=(Number(document.getElementById("extele").innerHTML))+(Number(document.getElementById("extele").innerHTML));
	e=(Number(document.getElementById("extciv").innerHTML))+(Number(document.getElementById("intciv").innerHTML));
	f=(Number(document.getElementById("extpl").innerHTML))+(Number(document.getElementById("intpl").innerHTML));
	g=(Number(document.getElementById("extwl").innerHTML))+(Number(document.getElementById("intwl").innerHTML));
	h=(Number(document.getElementById("extm2").innerHTML))+(Number(document.getElementById("intm2").innerHTML));
	i=(Number(document.getElementById("extch").innerHTML))+(Number(document.getElementById("intch").innerHTML));
	j=(Number(document.getElementById("extcad").innerHTML))+(Number(document.getElementById("intcad").innerHTML));
	k=(Number(document.getElementById("exteln").innerHTML))+(Number(document.getElementById("inteln").innerHTML));
	l=(Number(document.getElementById("extpcd").innerHTML))+(Number(document.getElementById("intpcd").innerHTML));
	m=(Number(document.getElementById("extcl").innerHTML))+(Number(document.getElementById("intcl").innerHTML));
	n=(Number(document.getElementById("extcpl").innerHTML))+(Number(document.getElementById("extcpl").innerHTML));
	var marks=new Array(a,b,c,d,e,f,g,h,i,j,k,l,m,n);
	var grade=new Array();
	var points=new Array();
	var i;
	for(i=0;i<14;i++)
	{
		if(marks[i]>90)
		{grade[i]=10;}
		else if((marks[i]>=80)&&(marks[i]<90))
		{grade[i]=9;}
		else if((marks[i]>=70)&&(marks[i]<80))
		{grade[i]=8;}
		else if((marks[i]>=60)&&(marks[i]<70))
		{grade[i]=7;}
		else if((marks[i]>=50)&&(marks[i]<60))
		{grade[i]=6;}
		else if((marks[i]>=45)&&(marks[i]<50))
		{grade[i]=5;}
		else if((marks[i]>=40)&&(marks[i]<45))
		{grade[i]=4;}
		else if(marks[i]<40)
		{grade[i]=0;}
	}
	points[0]=4*grade[0];
	points[1]=4*grade[1];
	points[2]=4*grade[2];
	points[3]=4*grade[3];
	points[4]=4*grade[4];
	points[5]=2*grade[5];
	points[6]=2*grade[6];
	points[7]=4*grade[7];
	points[8]=4*grade[8];
	points[9]=4*grade[9];
	points[10]=4*grade[10];
	points[11]=4*grade[11];
	points[12]=2*grade[12];
	points[13]=2*grade[13];
document.getElementById("grdm1").innerHTML=grade[0];
	document.getElementById("grdp").innerHTML=grade[1];
	document.getElementById("grdmech").innerHTML=grade[2];
	document.getElementById("grdele").innerHTML=grade[3];
	document.getElementById("grdciv").innerHTML=grade[4];
	document.getElementById("grdpl").innerHTML=grade[5];
	document.getElementById("grdwl").innerHTML=grade[6];
	document.getElementById("grdm2").innerHTML=grade[7];
	document.getElementById("grdch").innerHTML=grade[8];
	document.getElementById("grdcad").innerHTML=grade[9];
	document.getElementById("grdeln").innerHTML=grade[10];
	document.getElementById("grdpcd").innerHTML=grade[11];
	document.getElementById("grdcl").innerHTML=grade[12];
	document.getElementById("grdcpl").innerHTML=grade[13];
	document.getElementById("pointm1").innerHTML=points[0];
	document.getElementById("pointp").innerHTML=points[1];
	document.getElementById("pointmech").innerHTML=points[2];
	document.getElementById("pointele").innerHTML=points[3];
	document.getElementById("pointciv").innerHTML=points[4];
	document.getElementById("pointpl").innerHTML=points[5];
	document.getElementById("pointwl").innerHTML=points[6];
	document.getElementById("pointm2").innerHTML=points[7];
	document.getElementById("pointch").innerHTML=points[8];
	document.getElementById("pointpcd").innerHTML=points[11];
	document.getElementById("pointcad").innerHTML=points[9];
	document.getElementById("pointeln").innerHTML=points[10];
	document.getElementById("pointcl").innerHTML=points[12];
	document.getElementById("pointcpl").innerHTML=points[13];
    var sump,sumc,sgpap,sgpac;
	sump=0;
	sumc=0;
	sgpap=0;
	sgpac=0;
	sump=points[0]+points[1]+points[2]+points[3]+points[4]+points[5]+points[6];
	sumc=points[7]+points[8]+points[9]+points[10]+points[11]+points[12]+points[13];
  sgpap=sump/24;
	sgpap=sgpap.toFixed(2);
	sgpac=sumc/24;
	sgpac=sgpac.toFixed(2);
	document.getElementById("result1").value=sgpap;
	document.getElementById("result3").value=sgpac;
	document.getElementById("result1").disabled=true;
	document.getElementById("result3").disabled=true;
	var cgpa;
	cgpa=0;
	cgpa=((24*sgpap)+(24*sgpac))/48;
	S
	document.getElementById("result2").value=cgpa;
	document.getElementById("result2").disabled=true;
}
