package com.myenglishtime.mymagicbook_test;

import android.R;
import android.os.Bundle;
import android.view.WindowManager;

import org.apache.cordova.*;

public class MainActivity extends DroidGap {

	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		//super.loadUrl("file:///android_asset/www/index.html");
		//getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN | WindowManager.LayoutParams.FLAG_FORCE_NOT_FULLSCREEN
		//	);
		super.setIntegerProperty("splashscreen", R.drawable.ic_menu_day);
		super.loadUrl("file:///android_asset/www/index.html", 10000);
	} 
}
