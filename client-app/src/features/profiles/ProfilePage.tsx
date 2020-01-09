import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileContent from "./ProfileContent";
import { Grid } from "semantic-ui-react";

const ProfilePage = () => {
  return (
    <Grid>
      <Grid.Column width={16}>
        <ProfileHeader />
        <ProfileContent />
      </Grid.Column>
    </Grid>
  );
};

export default ProfilePage;
