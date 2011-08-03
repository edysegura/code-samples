package com.ericsson.portal.parser.types;

import java.util.HashMap;
import java.util.Map;

public enum InteractiveTags 
{
	
	INTERACTIVE_PROGRAM ("InteractiveProgram"),
	PROGRAM_NAME ("ProgramName"),
	
	INTERACTIVE_MENU ("InteractiveMenu"),
	MENU_NAME ("MenuName"),
	MENU_DISPLAY_NAME ("MenuDisplayName"),
	MENU_THUMBNAIL ("MenuThumbnail"),
	MENU_BACKGROUND ("MenuBackground"),
	MENU_ID ("MenuId"),
	
	INTERACTIVE_ELEMENT ("InteractiveElement"),
	ELEMENT_TYPE ("ElementType"),
	ELEMENT_THUMBNAIL ("ElementThumbnail"),
	ELEMENT_TITLE ("ElementTitle"),
	ELEMENT_CONTENT ("ElementContent"),
	ELEMENT_LIST ("ElementList"),
	ELEMENT_ID ("ElementId"),
	
	SCREEN ("Screen"),
	SCREEN_TITLE ("ScreenTitle"),
	SCREEN_CONTENT ("ScreenContent"),
	SCREEN_ELEMENT ("ScreenElement"),
	SCREEN_ID ("ScreenId"),
	
	TABLE_ELEMENT("TableElement"),
	TABLE_LINE("TableLine"),
	TABLE_CELL("TableCell"),
	
	RECOMENDATION_BAR("RecomendationBar"),
	
	CALL_TO_ACTION("CallToAction"),
	ACTION_ID("ActionId"),
	ACTION_NAME("ActionName"),
	ACTION_DISPLAY_NAME("ActionDisplayName"),
	ACTION_THUMBNAIL("ActionThumbnail"),
	ACTION_TYPE("ActionType"),
	ACTION_COST("ActionCost"),
	
	POLLING("Polling"),
	POLLING_QUESTION("PollingQuestion"),
	POLLING_ELEMENT("PollingElement"),
	
	DONATION("Donation"),
	DONATION_CHARITY_CAUSE_NAME("DonationCharityCauseName"),
	DONATION_AMOUNT("DonationAmount"),
	
	CAMERA_ANGLE("CameraAngle"),

	DOWNLOAD("Download"),
	DOWNLOAD_ITEM("DownloadItem"),
	DOWNLOAD_TYPE("DownloadType"),
	DOWNLOAD_THUMBNAIL("DownloadThumbnail"),
	DOWNLOAD_COST("DownloadCost"),
	DOWNLOAD_ITEM_ID("DownloadItemId"),
	DOWNLOAD_FILE_ADRESS("DownloadFileAddress"),
	DOWNLOAD_DISPLAY_NAME("DownloadDisplayName"),
	DOWNLOAD_TITLE("DownloadTitle"),
	
	VOTING("Voting"),
	VOTING_DISPLAY_TEXT("VotingDisplayText"),
	
	RATING("Rating"),
	DEFAULT_RATING("DefaultRating");
	
	private String value;
	
	
	private InteractiveTags(String value) {
		this.value = value;
	}
	
	@Override
	public String toString() {
		return this.value;
	}
	
	 private static final Map<String, InteractiveTags> lookup = new HashMap<String, InteractiveTags>();
    
	 static {
         for (InteractiveTags tag : InteractiveTags.values())
        	 lookup.put(tag.toString(), tag);
     }
	 
	 public static InteractiveTags get (String value){
		 return lookup.get(value);
	 }
}

