/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
#import <Firebase.h>

#import "AppDelegate.h"

#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <AppsFlyerLib/AppsFlyerTracker.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [FIRApp configure];
  RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
                                                   moduleName:@"influenceMe"
                                            initialProperties:nil];

  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  for(NSString *fontfamilyname in [UIFont familyNames])
  {
    NSLog(@"family:'%@'",fontfamilyname);
    for(NSString *fontName in [UIFont fontNamesForFamilyName:fontfamilyname])
    {
      NSLog(@"\tfont:'%@'",fontName);
    }
    NSLog(@"-------------");
  }
   /** APPSFLYER INIT **/
    [AppsFlyerTracker sharedTracker].appsFlyerDevKey = @"hvXJ8HBe9HJhw8Ag28YhcY";
    [AppsFlyerTracker sharedTracker].appleAppID = @"1345432520";
    
    [AppsFlyerTracker sharedTracker].delegate = self;
    
    /* Set isDebug to true to see AppsFlyer debug logs */
    [AppsFlyerTracker sharedTracker].isDebug = true;

    return YES;
  return YES;
}

// rest of your code, methods such as applicationWillResignActive, applicationDidEnterBackground etc.

//get conversion data and deep linking

-(void)onConversionDataReceived:(NSDictionary*) installData {
  //Handle Conversion Data (Deferred Deep Link)
  
}

-(void)onConversionDataRequestFailure:(NSError *) error {
  
  NSLog(@"%@",error);
}


- (void) onAppOpenAttribution:(NSDictionary*) attributionData {
  
  //Handle Deep Link
}

- (void) onAppOpenAttributionFailure:(NSError *)error {
  NSLog(@"%@",error);
}

// Reports app open from a Universal Link for iOS 9 or above
- (BOOL) application:(UIApplication *)application continueUserActivity:(NSUserActivity *)userActivity restorationHandler:(void (^)(NSArray<id> *restorableObjects))restorationHandler {
    [[AppsFlyerTracker sharedTracker] continueUserActivity:userActivity restorationHandler:restorationHandler];
    return YES;
  }

  // Reports app open from deep link from apps which do not support Universal Links (Twitter) and for iOS8 and below
  - (BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(NSString*)sourceApplication annotation:(id)annotation {
    [[AppsFlyerTracker sharedTracker] handleOpenURL:url sourceApplication:sourceApplication withAnnotation:annotation];
    return YES;
  }
  // Reports app open from deep link for iOS 10
  - (BOOL)application:(UIApplication *)application openURL:(NSURL *)url
  options:(NSDictionary *) options {
    [[AppsFlyerTracker sharedTracker] handleOpenUrl:url options:options];
    return YES;
  }


- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
