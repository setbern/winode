import { get } from "lodash";
import React, { Component } from "react";
import styled from "styled-components";

import Colors from "../../constants/colors";

const PostContainer = styled.a`
	border-bottom: 1px solid black;
	cursor: pointer;
	display: block;
	text-decoration: none;
`;
const PostContent = styled.div`
	color: ${Colors.white};
`;
const PostTitle = styled.div`
	font-weight: 700;
`;
const PostSource = styled.div``;
const PostBody = styled.div`
	max-height: 72px;
	overflow: hidden;
`;
const MediaContent = styled.div`
	display: flex;
`;
const PostMedia = styled.img`
	height: ${props => props.height};
	width: ${props => props.width};
`;

const VoterContainer = styled.div``;

const TextContent = styled.div``;

const RedditVoter = () => {
	return (
		<VoterContainer>
		</VoterContainer>
	)
};

export default class RedditPost extends Component {
	renderMediaContent() {
		const { post } = this.props;

		return (
			<React.Fragment>
				<MediaContent>
					<PostMedia src={get(post, 'thumbnail')} height={get(post, 'thumbnail_height')} width={get(post, 'thumbnail_width')} />

					<PostTitle>{get(post, "title")}</PostTitle>
				</MediaContent>
				<PostSource>{get(post, 'subreddit_name_prefixed')}</PostSource>
			</React.Fragment>
		);
	}

	renderTextContent() {
		const { post } = this.props;

		console.log('post is', post);
		return (
			<TextContent>
				<PostTitle>{get(post, "title")}</PostTitle>

				<PostSource>{get(post, "subreddit_name_prefixed")}</PostSource>

				<PostBody>{get(post, "selftext")}</PostBody>
			</TextContent>
		);
	}

	render() {
		const { post } = this.props;

		return (
			<PostContainer href={get(post, 'url')} target="_blank">
				<RedditVoter />

				<PostContent>
					{get(post, "media")
						? this.renderMediaContent()
						: this.renderTextContent()}
				</PostContent>
			</PostContainer>
		);
	}
}
