import sdk from "./1-SDK.js";

(async () => {
  try {
    const voteContractAddress = await sdk.deployer.deployVote({
      name: "Kickstart DAO",
      // This is the location of our governance token, ERC-20 contract
      voting_token_address: "0x8Ee82768B7C460A494162D5e0F40740d23a358Fe",

      // !! Specified in number of blocks. 
      // Block time of around 13.14 seconds

      // After a proposal is created, when can members start voting?
      // For now, we set this to immediately.
      voting_delay_in_blocks: 0,

      // How long do members have to vote on a proposal when it's created?
      // we will set it to 1 day = 6570 blocks
      voting_period_in_blocks: 6570,

      // The minimum % of the total supply that need to vote for
      // the proposal to be valid after the time for the proposal has ended.
      //!! 0 is just for example here because we need to have a certain minimum of people voting
      //!! 0 is wrong
      voting_quorum_fraction: 0,

      // What's the minimum # of tokens a user needs to be allowed to create a proposal?
      // Here, meaning no tokens are required for a user to be allowed to create a proposal.
      proposal_token_threshold: 0,
    });

    console.log(
      "✅ Successfully deployed vote contract, address:",
      voteContractAddress,
    );
  } catch (err) {
    console.error("Failed to deploy vote contract", err);
  }
})();
